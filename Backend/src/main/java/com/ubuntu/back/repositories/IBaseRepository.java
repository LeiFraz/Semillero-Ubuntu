package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Base;
import com.ubuntu.back.models.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@NoRepositoryBean
public interface IBaseRepository <E extends Base> extends JpaRepository<E, Long>, JpaSpecificationExecutor<E> {
    @Query(value = "SELECT * FROM #{#entityName} e WHERE e.deleted IS NULL", nativeQuery = true)
    List<E> findAll();
}
