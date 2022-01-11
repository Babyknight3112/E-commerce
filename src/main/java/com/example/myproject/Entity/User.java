package com.example.myproject.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String email;

    private String username;

    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    Collection<Role> roles = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && name.equals(user.name) && email.equals(user.email) && username.equals(user.username) && password.equals(user.password) && roles.equals(user.roles);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email, username, password, roles);
    }
}
