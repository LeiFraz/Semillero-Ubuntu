import axios from "axios";  

   const baseURL = "http://localhost:8080/microbusiness/find";  

    export const fetchData = async (searchQuery) => {  
      try { 
        console.log("Buscando datos con el query:", searchQuery);
      const response = await axios.get(`${baseURL}?name=${searchQuery}`);  
      console.log("Respuesta de la API:", response.data);
      const data = response.data.map((result) => ({
        title: result.name,
        description: result.description,
        information: result.more_information,
        images: result.images,
        subtitle: result.subtitle,
        category: result.sub_category,
        ubi: result.city 
  }));  
  return data;  
} catch (error) {  
  throw new Error('Error al buscar datos');  
}  
};