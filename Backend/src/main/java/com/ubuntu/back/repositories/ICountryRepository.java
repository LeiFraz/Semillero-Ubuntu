package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.Country;
import org.springframework.stereotype.Repository;

@Repository
public interface ICountryRepository extends IBaseRepository<Country>{

    Country findByName(String name);
}
