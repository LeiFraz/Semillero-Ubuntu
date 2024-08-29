package com.ubuntu.back.loaders.tests;

import com.ubuntu.back.constants.Categories;
import com.ubuntu.back.models.domain.*;
import com.ubuntu.back.services.ImagesService;
import com.ubuntu.back.services.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
@Order(6)
public class PublicationLoader implements CommandLineRunner {
    @Autowired
    private ImagesService imagesService;

    @Autowired
    private PublicationService publicationService;

    @Override
    public void run(String... args) throws Exception {

        if (publicationService.findAll().isEmpty()) {
            List<Publication> publications = new ArrayList<>();
            for (Publication p: getEntities()) {
                publications.add(publicationService.save(p));
            }
            setImagesToPublications(publications);
            for (Publication m : publications ) {
                publicationService.update(m.getId(), m);
            }
        }
    }

    public List<Publication> setImagesToPublications(List<Publication> publications){
        for(Publication p: publications){
            p.setImages(createAndSaveImages());
        }
        return publications;
    }

    public List<Images> createAndSaveImages() {
        List<Images> images = new ArrayList<>();
        try {
            images.add(imagesService.save(Images.builder().name("fvurpzvr6pyfvwhmye15").url("http://res.cloudinary.com/du2rbl63a/image/upload/v1721931020/fvurpzvr6pyfvwhmye15.jpg").build()));
            images.add(imagesService.save(Images.builder().name("urfmqsfvse5vaqxt5bfj").url("http://res.cloudinary.com/du2rbl63a/image/upload/v1721931022/urfmqsfvse5vaqxt5bfj.jpg").build()));
            images.add(imagesService.save(Images.builder().name("rooqzrhzyxvbzrki6rsz").url("http://res.cloudinary.com/du2rbl63a/image/upload/v1721931025/rooqzrhzyxvbzrki6rsz.jpg").build()));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return images;
    }

    public List<Publication> getEntities() throws Exception {
        List<Publication> publications = new ArrayList<>();

        publications.add(Publication.builder()
                        .title("Inversiones Éticas: Más que ganancias")
                        .description("Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n" +
                                "\n" +
                                "Estas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n" +
                                "\n" +
                                "El atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n" +
                                "\n" +
                                "Contrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n" +
                                "\n" +
                                "No obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como \"sostenibles\" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n" +
                                "\n" +
                                "En conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.")
                        .numberOfViews(10)
                .build());

        publications.add(Publication.builder()
                .title("Inversiones Éticas: Más que ganancias")
                .description("Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n" +
                        "\n" +
                        "Estas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n" +
                        "\n" +
                        "El atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n" +
                        "\n" +
                        "Contrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n" +
                        "\n" +
                        "No obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como \"sostenibles\" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n" +
                        "\n" +
                        "En conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.")
                .numberOfViews(25)
                .build());

        publications.add(Publication.builder()
                .title("Inversiones Éticas: Más que ganancias")
                .description("Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n" +
                        "\n" +
                        "Estas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n" +
                        "\n" +
                        "El atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n" +
                        "\n" +
                        "Contrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n" +
                        "\n" +
                        "No obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como \"sostenibles\" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n" +
                        "\n" +
                        "En conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.")
                .numberOfViews(3)
                .build());

        publications.add(Publication.builder()
                .title("Inversiones Éticas: Más que ganancias")
                .description("Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n" +
                        "\n" +
                        "Estas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n" +
                        "\n" +
                        "El atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n" +
                        "\n" +
                        "Contrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n" +
                        "\n" +
                        "No obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como \"sostenibles\" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n" +
                        "\n" +
                        "En conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.")
                .numberOfViews(30)
                .build());

        publications.add(Publication.builder()
                .title("Inversiones Éticas: Más que ganancias")
                .description("Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n" +
                        "\n" +
                        "Estas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n" +
                        "\n" +
                        "El atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n" +
                        "\n" +
                        "Contrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n" +
                        "\n" +
                        "No obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como \"sostenibles\" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n" +
                        "\n" +
                        "En conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.")
                .numberOfViews(50)
                .build());


        return publications;
    }

}

