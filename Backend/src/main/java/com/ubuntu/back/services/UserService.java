package com.ubuntu.back.services;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.ubuntu.back.models.domain.Role;
import com.ubuntu.back.models.domain.User;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.IUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class UserService extends BaseService<User> {
    @Autowired
    IUserRepository repository;

    public UserService(IBaseRepository<User> baseRepository){
        super(baseRepository);
    }
    public User findByEmail(String email) throws Exception {
        try {
            return repository.findByEmail(email);
        }catch (Exception e){
            throw new Exception("Didn't find the email");
        }
    };
    User findUserByEmailOrCreateIt(GoogleIdToken.Payload payload){
        User user = null;
        String email = payload.getEmail();

        if (repository.existsByEmail(email)) {
            user = repository.findByEmail(email);
        } else {
            user = new User();
            user.setEmail(email);
            user.setName((String) payload.get("given_name"));
            user.setLastName((String) payload.get("family_name"));
            //user.setRole(Role.PROVEEDOR);
            repository.save(user);
        }
        return user;
    }
}
