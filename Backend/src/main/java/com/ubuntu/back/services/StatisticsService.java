package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Publication;
import com.ubuntu.back.models.dto.MicroBusinessByCategoryDTO;
import com.ubuntu.back.models.dto.StatisticsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatisticsService {

    @Autowired
    MicroBusinessService microBusinessService;
    @Autowired
    PublicationService publicationService;
    @Autowired
    MessageService messageService;

    public StatisticsDTO getStatistics() throws Exception{
        try {
            Long countMicroBusiness = microBusinessService.getCountOfMicrobusiness();
            List<MicroBusinessByCategoryDTO> microBusinessByCategoryDTO = microBusinessService.countMicrobusinessByCategory();
            List<Publication> lastPublications = publicationService.getLastPublications();
            StatisticsDTO statisticsDTO = StatisticsDTO.builder()
                    .countMicroBusiness(countMicroBusiness)
                    .countMicroBusinessByCategory(microBusinessByCategoryDTO)
                    .lastPublications(lastPublications)
                    .countManaged(messageService.countMessagesInCurrentMonth(true))
                    .countNotManaged(messageService.countMessagesInCurrentMonth(false))
                    .build();
            return statisticsDTO;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

}
