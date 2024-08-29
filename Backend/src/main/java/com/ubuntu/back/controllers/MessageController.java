package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.Message;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/message")
public class MessageController extends BaseController<Message>{

    @Autowired
    MessageService service;

    public MessageController(BaseService<Message> baseService){
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
    public ResponseEntity<?> save(@RequestBody Message message){return super.save(message);}
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Message message){
        return super.update(id,message);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return super.delete(id);
    }

    @PostMapping("/managed/{id}")
    public ResponseEntity<?> changeToManaged(@PathVariable Long id){
        try{
            service.changeMessageToManaged(id);
            return ResponseEntity.status(HttpStatus.OK).body("¡Message changed to managed successfully!");
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @GetMapping("/managed/{managed}")
    public ResponseEntity<?> findIfIsManagedOrNot(@PathVariable boolean managed){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.findByManaged(managed));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }
}
