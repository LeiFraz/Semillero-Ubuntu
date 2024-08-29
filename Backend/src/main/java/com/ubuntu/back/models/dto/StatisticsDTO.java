package com.ubuntu.back.models.dto;

import com.ubuntu.back.models.domain.Publication;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class StatisticsDTO {
    private Long countMicroBusiness;
    private Long countManaged;
    private Long countNotManaged;
    private List<MicroBusinessByCategoryDTO> countMicroBusinessByCategory;
    private List<Publication> lastPublications;
}
