package com.ubuntu.back.repositories;


import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.Province;
import org.springframework.stereotype.Repository;

@Repository
public interface IProvinceRepository extends IBaseRepository<Province>{

    Province findByName(String name);
}
