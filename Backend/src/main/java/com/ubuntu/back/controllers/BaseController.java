package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.Base;
import com.ubuntu.back.models.domain.Country;
import com.ubuntu.back.services.BaseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class BaseController <E extends Base> {

    BaseService<E> service;

    public BaseController(BaseService<E> baseService){
        service=baseService;
    }

    public ResponseEntity<?> findAll(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    public ResponseEntity<?> findById(Long id){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    public ResponseEntity<?> save(E entity){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.save(entity));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
    public ResponseEntity<?> update(Long id, E entity){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.update(id,entity));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    public ResponseEntity<?> delete(Long id) {
        try {
            service.delete(id);
            return ResponseEntity.status(HttpStatus.OK).body("The entity has been successfully eliminated!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
