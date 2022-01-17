package com.example.myproject.Security.Login;

import com.example.myproject.Entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Collection;


@Data
@AllArgsConstructor
public class LoginResponse {

    private String username;
    private Collection<Role> roleList;
    private String jwtToken;
    private String notify;

    public LoginResponse(String username, Collection<Role> roleList, String jwtToken) {
        this.username = username;
        this.roleList = roleList;
        this.jwtToken = jwtToken;
        this.notify = "Login Successfully";
    }

    public LoginResponse(String notify) {
        this.notify = notify;
    }
}
