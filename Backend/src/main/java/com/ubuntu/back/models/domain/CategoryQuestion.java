package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table (name = "categoryquestion")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class CategoryQuestion extends Base{
    private String name;

}
