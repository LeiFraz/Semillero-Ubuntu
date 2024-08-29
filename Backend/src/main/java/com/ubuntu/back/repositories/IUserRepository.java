package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends IBaseRepository<User>{
    User findByEmail(String email);
    boolean existsByEmail(String email);
    User getUserModelByName(String name);
}
