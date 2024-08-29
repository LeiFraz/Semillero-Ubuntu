package com.ubuntu.back.loaders;

import com.ubuntu.back.constants.Countries;
import com.ubuntu.back.models.domain.Country;
import com.ubuntu.back.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Order(1)
public class CountryLoader implements CommandLineRunner {
    @Autowired
    private CountryService service;
    @Override
    public void run(String... args) throws Exception{
        if (service.findAll().isEmpty()){
            List<String> countries = Countries.countries;
            for (String p: countries){
                service.save(new Country(p));
            }
        }
    }

}
