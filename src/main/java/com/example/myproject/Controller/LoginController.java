package com.example.myproject.Controller;

import com.example.myproject.Security.Login.LoginInformation;
import com.example.myproject.Security.Login.LoginResponse;
import com.example.myproject.Security.Login.RegisterInformation;
import com.example.myproject.Security.Login.RegisterNotify;
import com.example.myproject.Security.SecurityService.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/log/jwt")
    public LoginResponse loginWeb( @RequestBody LoginInformation loginInformation) {
        return loginService.loginWeb(loginInformation);
    }

    @PostMapping("/log/register")
    public RegisterNotify registerWeb(@RequestBody RegisterInformation registerInformation) {
        return loginService.registerWeb(registerInformation);
    }
}
