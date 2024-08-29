package com.ubuntu.back.constants;

import com.ubuntu.back.models.domain.Category;

import java.util.ArrayList;
import java.util.List;

public class Categories {
    public static List<String> categories ;

    static {
        categories = new ArrayList<>();
        categories.add("Economía social/Desarrollo local/Inclusión Financiera");
        categories.add("Agroecología/Orgánicos/Alimentación saludable");
        categories.add("Conservación/Regeneración/Servicios ecosistémicos");
        categories.add("Empresas/Organismos de impacto/Economía circular");
    }
}
