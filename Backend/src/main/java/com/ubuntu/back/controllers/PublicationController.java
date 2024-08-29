package com.ubuntu.back.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubuntu.back.models.domain.Publication;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.PublicationService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;


@RestController
@RequestMapping("/publication")
public class PublicationController extends BaseController<Publication> {

    @Autowired
    PublicationService publicationService;
    private static final Logger logger = LoggerFactory.getLogger(PublicationController.class);

    public PublicationController(BaseService<Publication> baseService){ super(baseService);}

 @PostMapping
 public ResponseEntity<?> save(@RequestPart("file") List<MultipartFile> files,
                               @RequestPart("publication") String publicationJson) {
     try {
         return ResponseEntity.status(HttpStatus.OK).body(
                 publicationService.save(
                         publicationService.convertJsonToEntity(publicationJson, Publication.class),
                         publicationService.checkFiles(files)));
     } catch (IllegalArgumentException e) {
         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
     } catch (Exception e) {
         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
     }
 }
    @GetMapping("/{id}")
    public ResponseEntity<Publication> getPublicationById(@PathVariable Long id) {
        try {
            Publication publication = publicationService.findPublicationById(id);
            return new ResponseEntity<>(publication, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Publication> updatePublication(@PathVariable Long id, @Valid @RequestBody Publication publicationDetails) {
        try {
            Publication updatedPublication = publicationService.update(id, publicationDetails);
            return new ResponseEntity<>(updatedPublication, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePublication(@PathVariable Long id) {
        try {
            return super.delete(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PatchMapping("/{id}/views")
    public ResponseEntity<Publication> increaseViews(@PathVariable Long id) {
        try {
            Publication updatedPublication = publicationService.increaseViews(id);
            return new ResponseEntity<>(updatedPublication, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping
    public ResponseEntity<List<Publication>> getAllPublications() {
        try {
            List<Publication> publications = publicationService.findAllPublications();
            return new ResponseEntity<>(publications, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/active")
    public ResponseEntity<List<Publication>> getAllActivePublications() {
        try {
            List<Publication> publications = publicationService.findAllActivePublication();
            return new ResponseEntity<>(publications, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/last")
    public ResponseEntity<List<Publication>> getLastPublications() {
        try {
            List<Publication> publications = publicationService.getLastPublications();
            return ResponseEntity.ok(publications);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}



