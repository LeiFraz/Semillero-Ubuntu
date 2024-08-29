package com.ubuntu.back.controllers;

import com.ubuntu.back.models.domain.AnswerChatBot;
import com.ubuntu.back.models.domain.QuestionChatBot;
import com.ubuntu.back.services.AnswerChatBotService;
import com.ubuntu.back.services.CategoryQuestionService;
import com.ubuntu.back.services.QuestionChatBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/chatbot")
public class ChatBotController {
    @Autowired
    private AnswerChatBotService answerChatBotService;

    @Autowired
    private QuestionChatBotService questionChatBotService;

    @Autowired
    private CategoryQuestionService categoryQuestionService;

    @GetMapping("/questions")
    public ResponseEntity<?> findAllQuestions() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(questionChatBotService.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @GetMapping("/answers")
    public ResponseEntity<?> findAllAnswers() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(answerChatBotService.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<?> findAllCategories() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(categoryQuestionService.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @PostMapping("/ask")
    public ResponseEntity<?> askQuestion(@RequestBody Map<String, String> payload) {
        try {
            String questionValue = payload.get("question");
            QuestionChatBot question = questionChatBotService.findByValue(questionValue);
            if (question != null) {
                List<AnswerChatBot> answers = answerChatBotService.findByOriginQuestion(question);
                return ResponseEntity.status(HttpStatus.OK).body(answers);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Question not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
