package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.Country;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/country")
public class CountryController extends BaseController<Country>{
    @Autowired
    CountryService countryService;

    public CountryController(BaseService<Country> baseService){
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
    public ResponseEntity<?> save(@RequestBody Country country){
        return super.save(country);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Country country){
        return super.update(id,country);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return super.delete(id);
    }
}
