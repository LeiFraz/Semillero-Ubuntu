package com.ubuntu.back.models.domain;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;


// Super which automatically instantiates the ID, it is not read from the database.
@MappedSuperclass
@Getter
@Setter
public class Base {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    protected LocalDate deleted;

    protected LocalDateTime creationDate;
}
