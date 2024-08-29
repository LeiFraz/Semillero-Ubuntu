package com.ubuntu.back.loaders;

import com.ubuntu.back.constants.Categories;
import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.ICategoryRepository;
import com.ubuntu.back.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Order(3)
public class CategoryLoader implements CommandLineRunner {
    @Autowired
    private CategoryService service;

    @Override
    public void run(String... args) throws Exception{
        if (service.findAll().isEmpty()){
            List<String> categories = Categories.categories;
            for (String category: categories){
                service.save(new Category(category));
            }
        }
    }

}
