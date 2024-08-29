package com.ubuntu.back.models.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Message extends Base{
    @NotEmpty(message = "{NullValue}")
    private String fullName;
    @NotEmpty(message = "{NullValue}")
    @Email(message = "{email}")
    private String email;
    @NotEmpty(message = "{NullValue}")
    @Pattern(regexp = "^\\+\\d{1,3}( 9)? \\d{6,14}$", message = "The phone number must be in the format +54 9 2614233049")
    private String phone;

    @NotEmpty(message = "{NullValue}")
    @Size(max = 300, message = "{MaxString}")
    private String message;
    //When you create a message you have to set the current date
    private LocalDate requestDate;
    @NotNull(message = "{NullValue}")
    @ManyToOne
    private MicroBusiness microBusiness;

    //If it has a date it means that the contact request was managed
    private LocalDate managed;
}
