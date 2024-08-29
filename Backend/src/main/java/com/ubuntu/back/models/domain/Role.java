package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

public enum Role {
    ADMIN,
    VISITANTE,
}
