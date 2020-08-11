package org.ghost.controllers;

import org.ghost.models.MapTask;
import org.ghost.repositorys.MapTaskRepository;
import org.ghost.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value ="/task", produces = MediaType.APPLICATION_JSON_VALUE)
public class TaskController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MapTaskRepository mapTaskRepository;

//    @GetMapping
//    public List<Map<String, String>> list() {
//        return "index";
//    }

    @PostMapping
    public Map<String, String> create(@RequestBody  Map<String, String> task) {

        return task;
    }

}
