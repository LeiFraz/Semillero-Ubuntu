package com.ubuntu.back.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubuntu.back.mappers.MicroBusinessMapper;
import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.MicroBusiness;
import com.ubuntu.back.models.dto.MicroBusinessByCategoryDTO;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.IMicroBusinessRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
public class MicroBusinessService extends BaseService <MicroBusiness>{

    @Autowired
    private IMicroBusinessRepository repository;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ImagesService imagesService;
    @Autowired
    private MicroBusinessMapper microBusinessMapper;

    public MicroBusinessService(IBaseRepository<MicroBusiness> baseRepository){
        super(baseRepository);
    }

    public List<MicroBusiness> findByName(String name) throws Exception {
        try{
            return repository.findByName(name);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public List<MicroBusiness> findByCategory(Long id) throws Exception {
        try{
            Category category = categoryService.findById(id);
            return repository.findByCategory(category);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public MicroBusiness save(MicroBusiness microBusiness, List<MultipartFile> images) throws Exception {
        try{
            microBusiness.setImages(imagesService.uploadImages(images));
            microBusiness = super.save(microBusiness);
            return microBusiness;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }
    @Transactional
    public MicroBusiness update(MicroBusiness microBusiness, List<MultipartFile> images) throws Exception {
        try {
            MicroBusiness existingMicroBusiness = findById(microBusiness.getId());
            existingMicroBusiness.getImages().clear();
            existingMicroBusiness.getImages().addAll(imagesService.uploadImages(images));
            existingMicroBusiness.setName(microBusiness.getName());
            existingMicroBusiness.setDescription(microBusiness.getDescription());
            existingMicroBusiness.setMoreInformation(microBusiness.getMoreInformation());
            existingMicroBusiness.setCity(microBusiness.getCity());
            existingMicroBusiness.setCategory(microBusiness.getCategory());
            existingMicroBusiness.setSubCategory(microBusiness.getSubCategory());
            existingMicroBusiness.setProvince(microBusiness.getProvince());
            microBusinessMapper.mapperMicroBusiness(microBusiness, existingMicroBusiness);
            return super.update(microBusiness.getId(),existingMicroBusiness);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public long getCountOfMicrobusiness() throws Exception{
        try{
            return repository.getCountOfMicrobusiness();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }

    }

    public List<MicroBusinessByCategoryDTO> countMicrobusinessByCategory() throws Exception{
        try{
            List<MicroBusinessByCategoryDTO> list = new ArrayList<>();
            for (Object[] result : repository.countMicrobusinessByCategory()) {
                list.add(MicroBusinessByCategoryDTO.builder().name((String) result[0]).count((Long) result[1]).build());
            }
            return list;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

}

