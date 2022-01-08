package com.example.myproject.Security.SecurityService;

import com.example.myproject.Entity.Role;
import com.example.myproject.Entity.User;
import com.example.myproject.Security.Login.LoginInformation;
import com.example.myproject.Security.Login.LoginResponse;
import com.example.myproject.Security.Login.RegisterInformation;
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

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
            Authentication authenticate = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authenticate);

            User user = userService.getUser(username);
            Collection<Role> roles = user.getRoles();
            log.info("Thanh cong");
            return new LoginResponse(username, roles, jwtUtil.generateToken(user));
        } catch (BadCredentialsException e) {
            log.info("That bai");
            return null;
        }
    }

    @Override
    public String registerWeb(RegisterInformation registerInformation) {

        boolean check = userService.existUser(registerInformation.getUsername());
        if(check){
            return null;
        }

        userService.saveUser(registerInformation);
        return "successfully registered";
    }
}
