import React from 'react';  
import { Container, TextField, Typography, Box} from '@mui/material';   
import { styled } from '@mui/material/styles';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useState } from 'react';

import ImageOverlay from './ImageOverlay';

const CustomTextField = styled(TextField)(({ theme }) => ({  
    ...theme.typography.cf1,  
  }));  
const FormMicroGet = ({ initialValues }) => {  
  const [open, setOpen] = useState(false);  
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const handleImageClick = (index) => {  
    setCurrentImageIndex(index); // Guarda el índice de la imagen actual  
    setCurrentIndex(index);  
    setOpen(true); // Abre el modal  
  };  

  const handleClose = () => {  
    setOpen(false); // Cierra el modal  
  }; 
  return (  
    <Container maxWidth="sm">  
      <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>  
        Microemprendimientos  
      </Typography>  
      <Typography variant="body1"  gutterBottom sx={{ fontSize: '22px', color: 'primary.main', fontFamily: 'Lato', marginTop: '1.5rem', textAlign: 'center', lineHeight:"25px"}}>  
      {initialValues.name}  
      </Typography>  
      <Typography variant="body1" textAlign='center' gutterBottom sx={{ marginBottom:'22px', textAlign:'center', fontFamily:'Lato'}}>  
      {initialValues.category.name}  
      </Typography>  
      
     
      <form>  
      <Typography variant="cf1">
        <CustomTextField  
          id="subCategoria"
          label={<Typography variant="cf1">Subcategoria</Typography>}  
          fullWidth  
          margin="normal"  
          value= {initialValues.subCategory}
      
         
          
        /> 
        </Typography>
        
        <CustomTextField
        id="country"
        label={<Typography variant="cf1">Pais</Typography>}  
        fullWidth  
        margin="normal"    
        value={initialValues.province.country.name}  
         
      >  
      </CustomTextField> 
              
      <CustomTextField
        id="provincia"
        label={<Typography variant="cf1">Provincia</Typography>}  
        fullWidth  
        margin="normal"    
        value={initialValues.province.name}  
         
      >  
      </CustomTextField> 
      
        <CustomTextField 
          id="ciudad" 
          label={<Typography variant="cf1">Ciudad</Typography>}  
          fullWidth  
          margin="normal"  
          value={initialValues.city}   
        />  

        <CustomTextField  
          id="descripcion"
          label={<Typography variant="cf1">Descripcion</Typography>}  
          fullWidth
          margin="normal"  
          multiline  
          rows={6}  
          value={initialValues.description}  
          inputProps={{ maxLength: 300 }}  
        
        />  

        <CustomTextField 
          id="masInformacion" 
          label={<Typography variant="cf1">Mas Informacion</Typography>}  
          fullWidth  
          margin="normal"  
          multiline  
          rows={6}  
          value={initialValues.moreInformation}  
         
          inputProps={{ maxLength: 200 }}  
            
        />  
        
        </form>
        
        <Box display="flex" justifyContent="space-between" sx={{ marginTop: '1rem', marginBottom: '10px' }}>  
      {initialValues.images.map((image, index) => (  
        <Box key={image.id} sx={{ flexGrow: 1, padding: '0.5rem', textAlign: 'center', position: 'relative' }}>  
          <img  
            src={image.url}  
            alt={image.name}  
            style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}  
            onClick={() => handleImageClick(index)} // Ahora al hacer clic se abrirá el visor de imágenes  
          />  
          <ZoomInIcon  
            sx={{  
              position: 'absolute',  
              top: '50%',  
              left: '50%',  
              transform: 'translate(-50%, -50%)',  
              color: 'white',  
              fontSize: '2rem',  
              cursor: 'pointer',  
              '&:hover': { opacity: 0.8 },  
            }}  
            onClick={() => handleImageClick(index)}  
          />  
        </Box>  
      ))}  
    </Box>  
          
    <ImageOverlay  
        open={open}  
        onClose={handleClose}  
        images={initialValues.images}  
        currentIndex={currentIndex}  
        setCurrentIndex={setCurrentIndex} 
      />  

    </Container>  
  );  
};  

export default FormMicroGet;

