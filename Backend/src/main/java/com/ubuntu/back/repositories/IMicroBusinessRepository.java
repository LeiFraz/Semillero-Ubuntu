package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Category;
import com.ubuntu.back.models.domain.MicroBusiness;
import com.ubuntu.back.models.dto.MicroBusinessByCategoryDTO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface IMicroBusinessRepository extends IBaseRepository<MicroBusiness> {

    @Query("SELECT mb FROM MicroBusiness mb WHERE LOWER(mb.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<MicroBusiness> findByName(@Param("name") String name);

    List<MicroBusiness> findByCategory(Category category);

    @Query(value = "SELECT m.name, COUNT(*) FROM microbusiness m WHERE MONTH(m.creation_date)=MONTH(CURRENT_DATE) GROUP BY m.category_id", nativeQuery = true)
    List<Object[]> countMicrobusinessByCategory();

    @Query(value = "SELECT COUNT(*) FROM microbusiness m WHERE MONTH(m.creation_date)=MONTH(CURRENT_DATE)", nativeQuery = true)
    long getCountOfMicrobusiness();
}
