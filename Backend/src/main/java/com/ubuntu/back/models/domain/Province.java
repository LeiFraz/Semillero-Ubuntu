package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Province extends Base{
    @NotEmpty(message = "{NullValue}")
    private String name;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
}
