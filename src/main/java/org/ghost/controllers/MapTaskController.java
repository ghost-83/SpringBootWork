package org.ghost.controllers;

import org.ghost.repositorys.MapTaskRepository;
import org.ghost.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MapTaskController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MapTaskRepository mapTaskRepository;

    @GetMapping("/map-task")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "map-task";
    }
}

