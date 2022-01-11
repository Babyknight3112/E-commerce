package com.example.myproject.Security.SecurityService;

import com.example.myproject.Entity.User;
import com.example.myproject.Security.Login.RegisterInformation;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    Boolean saveUser(RegisterInformation registerInformation);
    String setAdminToUser(String username);
    User getUser(String username);
    List<User> getUsers();
    Boolean existUser(String username);

}
