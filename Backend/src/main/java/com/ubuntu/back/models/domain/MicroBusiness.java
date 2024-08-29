package com.ubuntu.back.models.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="microbusiness")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class MicroBusiness extends Base {

    @NotEmpty(message = "{NullValue}")
    private String name;

    @Size(max = 300, message = "{MaxString}")
    private String description;

    @Size(max = 300, message = "{MaxString}")
    private String moreInformation;

    private Boolean managing;

    private String city;

    @ManyToOne
    private Category category;

    private String subCategory;

    @ManyToOne
    private Province province;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Images> images = new ArrayList<>();
}
