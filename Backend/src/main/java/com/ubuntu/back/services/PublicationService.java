package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Publication;
import com.ubuntu.back.models.domain.Role;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.IPublicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

@Service
public class PublicationService extends BaseService<Publication> {

    @Autowired
    private IPublicationRepository publicationRepository;
    @Autowired
    private ImagesService imagesService;

    public PublicationService(IBaseRepository<Publication> baseRepositoryRepository) {
        super(baseRepositoryRepository);
    }
    public List<Publication> findAllPublications() throws Exception {
        return findAll();
    }
    public List<Publication> findAllActivePublication() throws Exception{
        return publicationRepository.findAllByActive(true);
    }
    public Publication findPublicationById(Long id) throws Exception {
        return findById(id);
    }
    public Publication increaseViews(Long id) throws Exception {
        Publication publication = findById(id);
        if (publication != null) {
            publication.setNumberOfViews(publication.getNumberOfViews() + 1);
            return save(publication);
        }
        throw new Exception("Publication not found");

    }

    public List<Publication> getLastPublications() throws Exception{
        try {
            return publicationRepository.getLastPublications();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public void deletePublication(Long id) throws Exception {
        Publication publication = findById(id);
        if (publication != null) {
//            publication.setDeleted(true);
            save(publication);
        } else {
            throw new Exception("Publication not found");
        }
    }
    public Publication save(Publication publication, List<MultipartFile> images) throws Exception {
        try {
            publication.setImages(imagesService.uploadImages(images));
            return super.save(publication);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}


