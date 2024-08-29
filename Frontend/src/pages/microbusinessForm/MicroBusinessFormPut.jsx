import React, { useEffect, useState } from "react";  
import { useParams, useNavigate } from "react-router-dom";  
import axios from 'axios';  
import FormMicroEdit from "../../components/microBusinessForm/MicroBusinessFormEdit";   
import { ModalGeneric } from "../../components/modalGeneric/ModalGeneric";  // Actualizar importación  
import { dataForm } from "../../assets/editForm.json";  
import servicesAxios from "../../services/axios";  

export const EditMicroemprendimiento = () => {  
    const { id } = useParams();  
    const [microbusinessData, setMicrobusinessData] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [modalOpen, setModalOpen] = useState(false);  
    const [modalTitle, setModalTitle] = useState('');  
    const [modalMessage, setModalMessage] = useState('');  
    const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => {  
        return { ...acc, ...item };  
    }, {});  

    const navigate = useNavigate(); // Para redirigir después de la edición  
  
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

    const handleSubmit = async (formData) => {  
        const { name, description, moreInformation, city, category, subCategory, province, images } = formData;  
        const form = new FormData();  
        
        if (images && images.length > 0) {  
            images.forEach((image) => {  
                form.append('file', image);  
            });  
        }  
    
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
            const response = await servicesAxios.putMicroForm(id, form);  
            setModalTitle('Éxito');  
            setModalMessage('Microemprendimiento actualizado exitosamente!');  
            setModalOpen(true);  
        } catch (error) {  
            const errorMessage = error.response ? error.response.data : error.message;  
            console.error('Error al actualizar el microemprendimiento:', errorMessage);  
            setModalTitle('Error');  
            setModalMessage('No se pudo actualizar el microemprendimiento.');  
            setModalOpen(true);  
        }  
    };   
   
    const handleModalClose = () => {  
        setModalOpen(false);  
        navigate(`/microver/${id}`); // Redirige a la página de detalles después de cerrar el modal  
    };  
  
    if (loading) {  
        return <div>Cargando...</div>;  
    }  
  
    if (!microbusinessData) {  
        return <div>No se encontró el microemprendimiento.</div>;  
    }  
  
    return (  
        <div>  
            <FormMicroEdit  
                initial  
                initialValues={microbusinessData}  
                fieldLabels={fieldLabels}   
                onSubmit={handleSubmit} // Agrega esta prop para manejar el envío  
            />  
            <ModalGeneric   
                titulo={modalTitle}   
                mensaje={modalMessage}   
                isOpen={modalOpen} // Cambiar a isOpen  
                onClose={handleModalClose}   
            />   
        </div>  
    );  
};