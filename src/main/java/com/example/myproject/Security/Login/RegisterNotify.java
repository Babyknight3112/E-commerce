package com.example.myproject.Security.Login;

import lombok.Data;

@Data
public class RegisterNotify {

    private String notify;

    public RegisterNotify() {
        this.notify = "Register Failed";
    }
}
