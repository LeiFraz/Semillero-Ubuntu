package com.ubuntu.back.controllers;


import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/category")
public class CategoryController extends BaseController<Category> {
    @Autowired
    CategoryService service;

    public CategoryController(BaseService<Category> baseService){
        super(baseService);
    }

    @GetMapping
    public ResponseEntity<?> findAll(){
        return super.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(Long id){
        return super.findById(id);
    }
}
