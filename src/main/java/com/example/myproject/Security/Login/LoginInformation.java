package com.example.myproject.Security.Login;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
public class LoginInformation {

    private String username;

    @NotEmpty
    private String password;

}
