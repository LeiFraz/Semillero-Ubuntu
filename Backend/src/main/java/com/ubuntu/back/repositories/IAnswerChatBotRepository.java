package com.ubuntu.back.repositories;

import com.ubuntu.back.models.domain.AnswerChatBot;
import com.ubuntu.back.models.domain.QuestionChatBot;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAnswerChatBotRepository extends IBaseRepository<AnswerChatBot> {
    List<AnswerChatBot> findByOriginQuestion(QuestionChatBot question);
}
