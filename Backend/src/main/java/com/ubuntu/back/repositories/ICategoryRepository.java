package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.MicroBusiness;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICategoryRepository extends IBaseRepository<Category> {
    Category findByName(String name);
}
