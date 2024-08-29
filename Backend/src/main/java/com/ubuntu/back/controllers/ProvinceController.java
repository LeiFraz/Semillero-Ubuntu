package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.Province;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/province")
public class ProvinceController extends BaseController<Province> {
    @Autowired
    ProvinceService provinceService;
    public ProvinceController(BaseService<Province> baseService){
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
    public ResponseEntity<?> save(@RequestBody Province province){
        return super.save(province);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Province province){
        return super.update(id,province);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return super.delete(id);
    }
}
