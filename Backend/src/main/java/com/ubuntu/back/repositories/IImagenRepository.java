package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Images;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IImagenRepository extends IBaseRepository<Images> {
    //List<Images> findByMicroBusinessId(Long microBusinessId);
}
