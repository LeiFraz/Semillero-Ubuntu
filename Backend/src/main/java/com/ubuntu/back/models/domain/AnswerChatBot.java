package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "answerchatbot")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class AnswerChatBot extends Base {
    private String value;

    @ManyToOne
    private QuestionChatBot originQuestion;

    @OneToMany
    private List<QuestionChatBot> generatedQuestions;
}
