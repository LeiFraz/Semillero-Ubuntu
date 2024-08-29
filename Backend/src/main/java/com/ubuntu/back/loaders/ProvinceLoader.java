package com.ubuntu.back.loaders;


import com.ubuntu.back.constants.Provinces;
import com.ubuntu.back.models.domain.Country;
import com.ubuntu.back.models.domain.Province;
import com.ubuntu.back.services.CategoryService;
import com.ubuntu.back.services.CountryService;
import com.ubuntu.back.services.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Component
@Order(2)
public class ProvinceLoader implements CommandLineRunner {
    @Autowired
    private ProvinceService provinceService;
    @Autowired
    private CountryService countryService;

    @Override
    public void run(String... args) throws Exception{
        if (provinceService.findAll().isEmpty()){
            HashMap<String,String> provinces = Provinces.provinces;

            for (Map.Entry<String, String> entry : provinces.entrySet()) {
                String provinceName = entry.getKey();
                String countryName = entry.getValue();

                Country country = countryService.findByName(countryName);

                provinceService.save(new Province(provinceName, country));
            }
        }
    }

}
