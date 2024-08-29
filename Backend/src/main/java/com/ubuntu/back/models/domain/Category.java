package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Category extends Base {
    @NotEmpty(message = "{NullName}")
    private String name;
}
