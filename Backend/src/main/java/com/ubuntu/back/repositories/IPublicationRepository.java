package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Publication;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPublicationRepository extends IBaseRepository<Publication>{

    @Query(value = "SELECT * FROM publication p WHERE p.active = true ORDER BY p.creation_date DESC", nativeQuery = true)
    List<Publication> findLastPublications();
    List<Publication> findAllByActive(boolean active);

    @Query(value = "SELECT * FROM publication p WHERE MONTH(p.creation_date)=MONTH(CURRENT_DATE) ORDER BY p.creation_date DESC LIMIT 10", nativeQuery = true)
    List<Publication> getLastPublications();
}
