package hu.belepteto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteController {
    @GetMapping("/home")
    public String handleWelcome(){
        return "home";
    }

    @GetMapping("/admin/home")
    public String handleAdminHome(){
        return "home_admin";
    }

    @GetMapping("/janitor/home")
    public String handleJanitorHome(){
        return "home_janitor";
    }
}
