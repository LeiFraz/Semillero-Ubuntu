package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "questionchatbot")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class QuestionChatBot extends Base{
    private String value;

    @ManyToOne
    private CategoryQuestion category;
}
