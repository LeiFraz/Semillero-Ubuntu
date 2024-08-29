package com.ubuntu.back.loaders.tests;

import com.ubuntu.back.constants.Categories;
import com.ubuntu.back.models.domain.*;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.ICategoryRepository;
import com.ubuntu.back.services.CategoryService;
import com.ubuntu.back.services.ImagesService;
import com.ubuntu.back.services.MicroBusinessService;
import com.ubuntu.back.services.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
@Order(4)
public class MicroBusinessLoader implements CommandLineRunner {
    @Autowired
    private MicroBusinessService microBusinessService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProvinceService provinceService;
    @Autowired
    private ImagesService imagesService;

    @Override
    public void run(String... args) throws Exception {

        if (microBusinessService.findAll().isEmpty()) {
            List<MicroBusiness> microBusinesses = new ArrayList<>();
            for (MicroBusiness m : getEntities()) {
                microBusinesses.add(microBusinessService.save(m));
            }
            setImagesToMicroBusiness(microBusinesses);
            for (MicroBusiness m : microBusinesses ) {
                microBusinessService.update(m.getId(), m);
            }
        }
    }

    public List<MicroBusiness> setImagesToMicroBusiness(List<MicroBusiness> microBusinesses){
        for(MicroBusiness m: microBusinesses){
            m.setImages(createAndSaveImages());
        }
        return microBusinesses;
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

    public List<MicroBusiness> getEntities() throws Exception {
        Province province1 = provinceService.findByName("Mendoza");
        Province province2 = provinceService.findByName("Buenos Aires");

        List<String> categories = Categories.categories;
        Category category1 = categoryService.findByName(categories.get(1));
        Category category2 = categoryService.findByName(categories.get(2));

        List<MicroBusiness> microBusinesses = new ArrayList<>();

        microBusinesses.add(MicroBusiness.builder()
                .name("EcoSenda")
                .category(category1)
                .subCategory("Finca agroecológica")
                .province(province1)
                .city("Tunuyán")
                .description("Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.")
                .moreInformation("Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.")
                .build());

        microBusinesses.add(MicroBusiness.builder()
                .name("FarmaEco")
                .category(category1)
                .subCategory("Farmacia ecológica")
                .province(province1)
                .city("Maipú")
                .description("Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.")
                .moreInformation("Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.")
                .build());

        microBusinesses.add(MicroBusiness.builder()
                .name("ConservarBuenosAires")
                .category(category2)
                .subCategory("Reserva Ecológica")
                .province(province2)
                .city("La Plata")
                .description("Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.")
                .moreInformation("Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.")
                .build());

        return microBusinesses;
    }
}

