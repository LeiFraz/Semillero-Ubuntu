package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.Country;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.ICountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService extends BaseService<Country>{
    @Autowired
    ICountryRepository countryRepository;

    public CountryService(IBaseRepository<Country> baseRepository) {
        super(baseRepository);
    }

    public Country findByName(String name) throws Exception {
        try{
            return countryRepository.findByName(name);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

}
