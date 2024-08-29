package com.ubuntu.back.loaders.tests;

import com.ubuntu.back.models.domain.Message;
import com.ubuntu.back.models.domain.MicroBusiness;
import com.ubuntu.back.services.MessageService;
import com.ubuntu.back.services.MicroBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
@Order(5)
public class MessageLoader implements CommandLineRunner {

    @Autowired
    MessageService messageService;
    @Autowired
    MicroBusinessService microBusinessService;

    @Override
    public void run(String... args) throws Exception {
        if(messageService.findAll().isEmpty()){
            for (Message message: getEntities()){
                messageService.save(message);
            }
        }

    }

    public List<Message> getEntities(){

        MicroBusiness microBusiness1 = null;
        MicroBusiness microBusiness2 = null;
        try {
            microBusiness1 = microBusinessService.findById(1L);
            microBusiness2 = microBusinessService.findById(2L);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        List<Message> messages = new ArrayList<>();

        messages.add(Message.builder()
                .fullName("Martinez, Juan")
                .email("martinezjuan@gmail.com")
                .phone("+54 9 261589645")
                .message("Hola, me gustaría recibir más información sobre cómo invertir en el Microemprendimiento.\n" +
                        "\n" +
                        "Aguardo su contacto.\n" +
                        "\n" +
                        "Gracias.")
                .microBusiness(microBusiness1)
                .build());

        messages.add(Message.builder()
                .fullName("Ruiz, Alberto")
                .email("alberto.ruiz@gmail.com")
                .phone("+54 9 2615342333")
                .message("Hola soy Alberto, me gustaría recibir más información sobre el Microemprendimiento.")
                .microBusiness(microBusiness2)
                .build());

        messages.add(Message.builder()
                .fullName("Pedro Pascal")
                .email("pedropascal123@gmail.com")
                .phone("+54 9 5614142444")
                .message("Hola, como puedo invertir?")
                .managed(LocalDate.now())
                .microBusiness(microBusiness1)
                .build());
        return messages;
    }
}
