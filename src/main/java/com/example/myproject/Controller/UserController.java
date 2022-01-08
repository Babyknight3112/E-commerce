package com.example.myproject.Controller;

import com.example.myproject.Entity.User;
import com.example.myproject.Security.SecurityService.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public String setAdminToUser(@RequestBody String username) {
        return userService.setAdminToUser(username);
    }

    @GetMapping("/user/{name}")
    public User getUser( @PathVariable("name") String username) {
        return userService.getUser(username);
    }

    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }


}
