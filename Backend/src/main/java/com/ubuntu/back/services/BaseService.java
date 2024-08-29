package com.ubuntu.back.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubuntu.back.models.domain.Base;
import com.ubuntu.back.models.domain.MicroBusiness;
import com.ubuntu.back.models.domain.User;
import com.ubuntu.back.repositories.IBaseRepository;
import jakarta.transaction.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public class BaseService <E extends Base>{

    protected IBaseRepository<E> baseRepository;

    public BaseService(IBaseRepository<E> baseRepository){
        this.baseRepository = baseRepository;
    }

    @Transactional
    public List<E> findAll() throws Exception {

        try{
            return baseRepository.findAll();
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public E findById(Long id) throws Exception {
        try{
            Optional<E> entityOptional = baseRepository.findById(id);
            if(entityOptional.isPresent()) {return entityOptional.get();}
            else {return null;}
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public E save(E entity) throws Exception {
        try{
            entity.setCreationDate(LocalDateTime.now());
            return baseRepository.save(entity);
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public E update(Long id, E entity) throws Exception {
        try{
            Optional<E> entityOptional = baseRepository.findById(id);
            if(entityOptional.isPresent()){
                entity.setId(entityOptional.get().getId());
                return baseRepository.save(entity);
            }else{
                throw new Exception("Didn't find the entity");
            }
        }catch(Exception e){
            e.printStackTrace();
            throw new Exception(e.getMessage());
        }
    }

    //Low logic of entity
    public void delete(Long id) throws Exception {
        try{
            E entity=findById(id);
            entity.setDeleted(LocalDate.now());
            update(entity.getId(), entity);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public List<MultipartFile> checkFiles(List<MultipartFile> files){
        if (files == null || files.isEmpty()) {
            throw new IllegalArgumentException("Files are missing");
        }
        return files;
    }

    public E convertJsonToEntity(String json, Class<E> entityType) throws Exception {
        if (json == null || json.isEmpty()) throw new IllegalArgumentException(entityType.getSimpleName() + " data is missing");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, entityType);
    }

}
