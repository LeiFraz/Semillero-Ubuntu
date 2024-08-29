package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.MicroBusiness;
import com.ubuntu.back.services.BaseService;
import com.ubuntu.back.services.MicroBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("/microbusiness")
public class MicroBusinessController extends BaseController<MicroBusiness> {

    @Autowired
    MicroBusinessService microBusinessService;

    public MicroBusinessController(BaseService<MicroBusiness> baseService) {
        super(baseService);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return super.findAll();
    }

    @GetMapping("/find")
    public ResponseEntity<?> findByName(@RequestParam(value = "name") String name) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(microBusinessService.findByName(name));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return super.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestPart("file") List<MultipartFile> files,
                                  @RequestPart("microBusiness") String microBusinessJson) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    microBusinessService.save(
                            microBusinessService.convertJsonToEntity(microBusinessJson, MicroBusiness.class),
                            microBusinessService.checkFiles(files)
                    )
            );
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,
                                    @RequestPart("file") List<MultipartFile> files,
                                    @RequestPart("microBusiness") String microBusinessJson) {
        try {
            MicroBusiness microBusiness = microBusinessService.convertJsonToEntity(microBusinessJson, MicroBusiness.class);
            microBusiness.setId(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    microBusinessService.update(
                            microBusiness,
                            microBusinessService.checkFiles(files)
                    )
            );
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<?> findByCategory(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(microBusinessService.findByCategory(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            //imagesService.deleteImagesByMicroBusinessId(id);
            return super.delete(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}