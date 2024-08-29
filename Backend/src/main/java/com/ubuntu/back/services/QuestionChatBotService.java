package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.QuestionChatBot;
import com.ubuntu.back.repositories.IQuestionChatBotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionChatBotService extends BaseService<QuestionChatBot> {
    @Autowired
    private IQuestionChatBotRepository repository;

    public QuestionChatBotService(IQuestionChatBotRepository repository) {
        super(repository);
    }

    public QuestionChatBot findByValue(String value) {
        return repository.findByValue(value);
    }
}