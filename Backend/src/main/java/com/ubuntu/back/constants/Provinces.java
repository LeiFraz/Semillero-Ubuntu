package com.ubuntu.back.constants;

import com.ubuntu.back.models.domain.Province;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Provinces {
    public static HashMap<String,String> provinces;

    static {
        provinces = new HashMap<String, String>();
        List<String> countries = Countries.countries;
        String country;

        country = countries.get(0);

        provinces.put("Mendoza", country);
        provinces.put("Buenos Aires",country);
        provinces.put("Santiago del Estero",country);
        provinces.put("Córdoba",country);
        provinces.put("San Juan",country);
        provinces.put("Salta",country);
        provinces.put("Entre Rios",country);
        provinces.put("Tucuman",country);
        provinces.put("Misiones",country);
        provinces.put("Chubut",country);
        provinces.put("Tierra del Fuego",country);
        provinces.put("Neuquen",country);
        provinces.put("Chaco",country);
        provinces.put("Formosa",country);
        provinces.put("Jujuy",country);
        provinces.put("Catamarca",country);
        provinces.put("La Rioja",country);
        provinces.put("Santa Fe",country);
        provinces.put("Santa Cruz",country);
        provinces.put("Rio Negro",country);
        provinces.put("San Luis",country);

        country = countries.get(1);

        provinces.put("Ciudad de México", country);
        provinces.put("Cancún", country);
        provinces.put("Puebla Zaragoza", country);
        provinces.put("Veracruz", country);
        provinces.put("Oaxaca", country);
        provinces.put("Guadalajara", country);
        provinces.put("Monterrey", country);
        provinces.put("Acapulco", country);
        provinces.put("Puerto Vallarta", country);
        provinces.put("Santiago de Querétaro", country);
        provinces.put("Tijuana", country);
        provinces.put("Mérita", country);
        provinces.put("Juárez", country);
        provinces.put("Ecatepec de Morelos", country);
        provinces.put("León", country);
        provinces.put("Aguascalientes", country);

        country = countries.get(2);

        provinces.put("Madrid", country);
        provinces.put("Barcelona", country);
        provinces.put("Valencia", country);
        provinces.put("Alicante", country);
        provinces.put("Sevilla", country);
        provinces.put("Málaga", country);
        provinces.put("Murcia", country);
        provinces.put("Cádiz", country);
        provinces.put("Baleares", country);
        provinces.put("Vizcaya", country);
        provinces.put("Las Palmas", country);
        provinces.put("La Coruña", country);

    }
}
