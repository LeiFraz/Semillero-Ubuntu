package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Country;
import com.ubuntu.back.models.domain.Province;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.IProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProvinceService extends BaseService<Province>{

    @Autowired
    IProvinceRepository provinceRepository;

    public ProvinceService(IBaseRepository<Province> baseRepository) {
        super(baseRepository);
    }

    public Province findByName(String name) throws Exception {
        try{
            return provinceRepository.findByName(name);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}