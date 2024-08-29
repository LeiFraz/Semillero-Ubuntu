package com.ubuntu.back.controllers;

import com.ubuntu.back.services.ImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImagesService imagesService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") List<MultipartFile> file) {
        try {
            return ResponseEntity.ok(imagesService.uploadImages(file));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) throws IOException {
        if (imagesService.deleteImages(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Error deleted images with id: "+id);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateImage(@PathVariable Long id, @RequestParam("file")MultipartFile file){
        try {
            return ResponseEntity.ok(imagesService.updateImages(id,file));
        }catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
