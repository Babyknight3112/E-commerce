package com.example.myproject.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Test {

    @GetMapping("/Hi")
    public String sayHi(){
        return "hello";
    }

}
