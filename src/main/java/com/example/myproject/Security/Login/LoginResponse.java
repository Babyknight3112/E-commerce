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

}
