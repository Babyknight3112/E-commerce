package com.example.myproject.Security.SecurityService;

import com.example.myproject.Entity.Role;
import com.example.myproject.Entity.User;
import com.example.myproject.Security.Login.LoginInformation;
import com.example.myproject.Security.Login.LoginResponse;
import com.example.myproject.Security.Login.RegisterInformation;
import com.example.myproject.Security.Login.RegisterNotify;
import com.example.myproject.Security.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Component
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final AuthenticationManager authenticationManager;

    private final UserService userService;

    private final JwtUtil jwtUtil;

    @Override
    public LoginResponse loginWeb(LoginInformation loginInformation) {
        try {
            String username = loginInformation.getUsername();
            String password = loginInformation.getPassword();

            log.info(username);
            log.info(password);

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
            Authentication authenticate = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authenticate);

            User user = userService.getUser(username);
            Collection<Role> roles = user.getRoles();
            log.info("Thanh cong");
            return new LoginResponse(username, roles, jwtUtil.generateToken(user));
        } catch (BadCredentialsException e) {
            log.info("That bai");
            return new LoginResponse("Username hoặc password không trùng khớp");
        }
    }

    @Override
    public RegisterNotify registerWeb(RegisterInformation registerInformation) {


        if(!registerInformation.getName().matches("^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩ" +
                "ũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚ" +
                "ỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]{1,30}$")){
            return new RegisterNotify("Tên không được chứa số và các ký tự đặc biệt");
        }

        if(!registerInformation.getEmail().matches("^[a-zA-Z0-9-_.]+[@][a-zA-Z0-9.]+$")){
            return new RegisterNotify("Email chỉ được chứa các chữ cái, các chữ số và các ký tự '-','.','_'");
        }

        if(!registerInformation.getUsername().matches("^[a-zA-Z0-9-_.]{8,30}$")){
            return new RegisterNotify("Username chỉ được chứa các chữ cái, các chữ số, các ký tự '-','.','_', ít nhất 8 ký tự và nhiều nhất 30 ký tự");
        }

        if(!registerInformation.getPassword().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$")){
            return new RegisterNotify("Password phải chứa ít nhất một chữ thường, một chữ in hoa, một số và ít nhất 8 ký tự");
        }

        if(!registerInformation.getPassword().equals(registerInformation.getPasswordRepeat())){
            return new RegisterNotify("Nhập lại password không khớp với password đã nhập");
        }

        boolean check = userService.existUser(registerInformation.getUsername());
        if(check){
            return new RegisterNotify("Tồn tại username đã nhập");
        }

        boolean verify = userService.saveUser(registerInformation);
        log.info("ok");
        return new RegisterNotify("Successfully Register");
    }
}
