package com.example.myproject.Security.Login;

import lombok.Data;

import javax.validation.constraints.*;

@Data
public class RegisterInformation {

    @NotBlank
    @Size(max = 30)
    private String name;

    @NotBlank
    @Size(max = 50)
    private String email;

    @NotBlank
    private String username;

    @NotEmpty
    private String password;

    @NotEmpty
    private String passwordRepeat;


}
