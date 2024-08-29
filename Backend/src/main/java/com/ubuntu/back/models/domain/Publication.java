package com.ubuntu.back.models.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Publication extends Base {

    @NotNull
    private String title;

    @Size(max = 2500)
    private String description;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Images> images = new ArrayList<>();

    @ManyToOne
    private User creatorUser;

    private Integer numberOfViews = 0;

    private boolean active;

}

