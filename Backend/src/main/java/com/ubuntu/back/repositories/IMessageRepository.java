package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMessageRepository extends IBaseRepository<Message> {

    public List<Message> findByManagedIsNull();

    public List<Message> findByManagedIsNotNull();

    @Query(value = "SELECT COUNT(*) FROM message m WHERE m.managed IS NOT NULL",nativeQuery = true)
    public Long countManagedMessages();

    @Query(value = "SELECT COUNT(*) FROM message m WHERE m.managed IS NULL",nativeQuery = true)
    public Long countNotManagedMessages();

    @Query(value = "SELECT COUNT(*) FROM message m WHERE m.managed IS NOT NULL AND MONTH(m.creation_date)=MONTH(CURRENT_DATE)",nativeQuery = true)
    public Long countManagedMessagesInCurrentMonth();

    @Query(value = "SELECT COUNT(*) FROM message m WHERE m.managed IS NULL AND MONTH(m.creation_date)=MONTH(CURRENT_DATE)",nativeQuery = true)
    public Long countNotManagedMessagesInCurrentMonth();
}
