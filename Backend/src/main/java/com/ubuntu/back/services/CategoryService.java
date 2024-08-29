package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.MicroBusiness;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService extends BaseService<Category> {
    @Autowired
    ICategoryRepository repository;

    public CategoryService(IBaseRepository<Category> baseRepository){
        super(baseRepository);
    }

    public Category findByName(String name) throws Exception {
        try{
            return repository.findByName(name);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

}
