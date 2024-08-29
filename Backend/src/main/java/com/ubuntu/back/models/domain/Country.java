package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Country extends Base{
    @NotEmpty(message = "{NullValue}")
    private String name;
}
