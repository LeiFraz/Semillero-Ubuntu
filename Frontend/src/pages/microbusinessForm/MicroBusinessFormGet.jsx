import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";  
import axios from 'axios';  
import FormMicroGet from "../../components/microBusinessForm/MicroBusinessForm"; // Asegúrate de ajustar la ruta correctamente  

export const MicroemprendimientoDetail = () => {  
  const { id } = useParams();  
  const [microbusinessData, setMicrobusinessData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  
    
  useEffect(() => {  
    const fetchMicroBusiness = async () => {  
      try {  
        const response = await axios.get(`http://localhost:8080/microbusiness/${id}`);  
        setMicrobusinessData(response.data);  
      } catch (error) {  
        console.error('Error al cargar el microemprendimiento:', error.response ? error.response.data : error.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchMicroBusiness();  
  }, [id]);  
  
  
  if (loading) {  
    return <div>Cargando...</div>;  
  }  
  
 
  if (!microbusinessData) {  
    return <div>No se encontró el microemprendimiento.</div>;  
  }  
  
  return (  
    <FormMicroGet
      initial
      initialValues={microbusinessData}   
      />  
    );  
  };  
 