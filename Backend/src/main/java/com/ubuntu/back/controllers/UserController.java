package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.User;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
public class UserController extends BaseController<User> {

    @Autowired
    UserService userService;

    public UserController(BaseService<User> baseService){
        super(baseService);
    }
    @GetMapping
    public ResponseEntity<?> findAll(){
        return super.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return super.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody User user){
        return super.save(user);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody User user){
        return super.update(id,user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return super.delete(id);
    }
}
