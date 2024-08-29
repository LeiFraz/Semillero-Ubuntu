package com.ubuntu.back.mappers;

import com.ubuntu.back.models.domain.MicroBusiness;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface MicroBusinessMapper {

    void mapperMicroBusiness(MicroBusiness source, @MappingTarget MicroBusiness target);
}