package com.example.myproject.Security.SecurityService;

import com.example.myproject.Security.Login.LoginInformation;
import com.example.myproject.Security.Login.LoginResponse;
import com.example.myproject.Security.Login.RegisterInformation;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {

    LoginResponse loginWeb(LoginInformation loginInformation);

    String registerWeb(RegisterInformation registerInformation);



}
