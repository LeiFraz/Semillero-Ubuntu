package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.AnswerChatBot;
import com.ubuntu.back.models.domain.QuestionChatBot;
import com.ubuntu.back.repositories.IAnswerChatBotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerChatBotService extends BaseService<AnswerChatBot> {
    @Autowired
    private IAnswerChatBotRepository repository;

    public AnswerChatBotService(IAnswerChatBotRepository repository) {
        super(repository);
    }

    public List<AnswerChatBot> findByOriginQuestion(QuestionChatBot question) {
        return repository.findByOriginQuestion(question);
    }
}