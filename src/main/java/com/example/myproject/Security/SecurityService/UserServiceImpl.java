package com.example.myproject.Security.SecurityService;

import com.example.myproject.Entity.Role;
import com.example.myproject.Entity.User;
import com.example.myproject.Repository.RoleRepository;
import com.example.myproject.Repository.UserRepository;
import com.example.myproject.Security.Login.RegisterInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Component
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public User saveUser(RegisterInformation registerInformation) {
        if (!registerInformation.getPassword().equals(registerInformation.getPasswordRepeat())) {
            return null;
        }

        User user = new User();
        user.setUsername(registerInformation.getUsername());
        user.setPassword(passwordEncoder.encode(registerInformation.getPassword()));
        Collection<Role> roles = new ArrayList<>();
        roles.add(roleRepository.getById(1));
        user.setRoles(roles);
        userRepository.save(user);
        return user;
    }

    @Override
    public String setAdminToUser(String username) {
        User user = userRepository.findByUsername(username);
        Collection<Role> roles = user.getRoles();
        roles.add(roleRepository.getById(2));
        userRepository.save(user);
        return "Successful";
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Boolean existUser(String username) {
        return userRepository.findByUsername(username) != null;
    }
}
