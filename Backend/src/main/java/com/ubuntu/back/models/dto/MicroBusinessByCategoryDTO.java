package com.ubuntu.back.models.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MicroBusinessByCategoryDTO {
    private String name;
    private Long count;
}
