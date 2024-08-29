package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.QuestionChatBot;
import org.springframework.stereotype.Repository;

@Repository
public interface IQuestionChatBotRepository extends IBaseRepository<QuestionChatBot> {
    QuestionChatBot findByValue(String value);
}
