package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.CategoryQuestion;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.ICategoryQuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoryQuestionService extends BaseService<CategoryQuestion> {
    private ICategoryQuestionRepository repository;

    public CategoryQuestionService(IBaseRepository<CategoryQuestion> baseRepository) {
        super(baseRepository);
    }

}
