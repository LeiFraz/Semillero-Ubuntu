import React, { useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";  
import FormMicroemprendimiento from "../../components/microBusinessForm/MicroBusinessFormPost";  
import { dataForm } from "../../assets/createForm.json";  
import servicesAxios from "../../services/axios";  
import { ModalGeneric } from "../../components/modalGeneric/ModalGeneric";   

export const CreateFormu = () => {  
  const navigate = useNavigate();  
  const title = dataForm[0].title || '';  
  const subtitle = dataForm[0].subtitle || '';  
  const button2 = dataForm[0].button2 || '';  
  const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => {  
      return { ...acc, ...item };  
  }, {});  

  // Estado del modal  
  const [modalTitle, setModalTitle] = useState('');  
  const [modalMessage, setModalMessage] = useState('');  
  const [modalOpen, setModalOpen] = useState(false);  

  const handleModalClose = () => {  
    setModalOpen(false);  
    navigate('/microemprendimientosA'); // Redirigir al cerrar el modal  
  };  

  const handleSubmit = async (formData) => {  
    const { name, description, moreInformation, city, category, subCategory, province, images } = formData;  
    const form = new FormData();  

    images.forEach((image) => {  
      form.append('file', image);  
    });  

    const microBusinessData = {  
      name,  
      description,  
      moreInformation,  
      city,  
      category: { id: category },  
      subCategory,  
      province: { id: province }  
    };  

    form.append('microBusiness', JSON.stringify(microBusinessData));  

    try {  
      const response = await servicesAxios.sendMicroForm(form);  
      console.log('Microemprendimiento creado exitosamente:', response.data);   

      setModalTitle('Éxito');  
      setModalMessage('Microemprendimiento cargado con éxito.');  
      setModalOpen(true);  

    } catch (error) {  
      console.error('Error al crear microemprendimiento:', error.response ? error.response.data : error.message);  
      
      setModalTitle('Error');  
      setModalMessage('Lo sentimos, el microemprendimiento no se pudo cargar.');  
      setModalOpen(true);  
    }  
  };  

  return (  
    <div>  
      <FormMicroemprendimiento  
        title={title}   
        subtitle={subtitle}   
        button2={button2}   
        fieldLabels={fieldLabels}  
        onSubmit={handleSubmit}  
      />  
      <ModalGeneric  
        titulo={modalTitle}   
        mensaje={modalMessage}   
        isOpen={modalOpen}  
        onClose={handleModalClose} // Asegúrate de pasar el onClose  
      />  
    </div>  
  );  
};