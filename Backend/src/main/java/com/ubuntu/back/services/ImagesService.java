package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Images;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.IImagenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class ImagesService extends BaseService <Images> {
    @Autowired
      CloudinaryService cloudinaryService;
    @Autowired
      IImagenRepository imagesRepository;

    @Autowired
    public ImagesService(IBaseRepository<Images> baseService) {
        super(baseService);
    }

    public List<Images> uploadImages(List<MultipartFile> files) throws IOException {
        List<Images> imagesList = new ArrayList<>();
        for (MultipartFile file : files) {
            Images images = saveImage(file);
            imagesList.add(images);
        }
        return imagesList;
    }

    public Images saveImage(MultipartFile file) throws IOException {

        Map uploadResult = cloudinaryService.uploadImage(file);
        Images images = new Images();
        images.setUrl(uploadResult.get("url").toString());
        images.setName(uploadResult.get("display_name").toString());
        imagesRepository.save(images);

        return images;
    }

    public Boolean deleteImages(Long id) throws IOException {
        try {
            Images existingImage = imagesRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Image not found"));
            Map map = cloudinaryService.deleteImage(existingImage.getName());
            imagesRepository.delete(existingImage);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Images updateImages(Long id, MultipartFile file) throws IOException {
        Images existingImage = imagesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Image not found"));
        Map updateResult = cloudinaryService.updateImage(existingImage.getName(), file);
        existingImage.setUrl(updateResult.get("url").toString());
        imagesRepository.save(existingImage);
        return existingImage;
    }

    /*
    public Boolean deleteImagesByMicroBusinessId(Long microBusinessId){
        try {
            List<Images> byMicroBusinessId = imagesRepository.findByMicroBusinessId(microBusinessId);
            if (byMicroBusinessId.size()>0) {
                for (Images image : byMicroBusinessId) {
                    super.delete(image.getId());
                }
            }
            return true;
        }catch (Exception e){
            return false;
        }
    }
     */
}
