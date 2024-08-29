package com.ubuntu.back.models.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "images")
@Builder
public class Images extends Base {

    private String name;
    private String url;
}

