import React from 'react';  
import { Container, TextField, Typography, MenuItem, Button, Box, Grid, IconButton } from '@mui/material';   
import { styled } from '@mui/material/styles';  
import { useState, useEffect } from 'react';  
import EditIcon from '@mui/icons-material/Edit';  
import DeleteIcon from '@mui/icons-material/Delete';  
import { dataForm } from "../../assets/editForm.json";  

const CustomTextField = styled(TextField)(({ theme }) => ({  
    ...theme.typography.cf1,  
}));  

const IconContainer = styled(Box)(({ theme }) => ({  
    background: '#09090999',  
    width: '24px',  
    height: '24px',  
    borderRadius: '100px',  
    padding: '4px',  
    gap: '10px',  
    display: 'flex',  
    alignItems: 'center',  
    justifyContent: 'center',  
}));  

const StyledEditIcon = styled(EditIcon)({  
    color: '#FDFDFE',  
    width: '12px',  
    height: '15px',  
});  

const StyledDeleteIcon = styled(DeleteIcon)({  
    color: '#FDFDFE',  
    width: '12px',  
    height: '15px',  
});  

const FormMicroEdit = ({ initialValues, fieldLabels, onSubmit }) => {  
    const [formData, setFormData] = useState(initialValues);  
    const categories = dataForm[0].fieldLabels[0].categoria;  
    const provinces = dataForm[0].fieldLabels[0].provincia;  
    
    useEffect(() => {  
        setFormData(initialValues);  
    }, [initialValues]);  

    const handleChange = (event) => {  
        const { name, value } = event.target;  
        if (name === "category" || name === "province") {  
            setFormData({  
                ...formData,  
                [name]: { id: value },   
            });  
        } else {  
            setFormData({  
                ...formData,  
                [name]: value,  
            });  
        }  
    };  

    const handleSubmit = (e) => {  
      e.preventDefault();  
      console.log("Datos del formulario antes de enviar:", formData); // Log de datos del formulario  
    onSubmit(formData); 
        
        onSubmit(formData);  
    };  

    const handleDeleteImage = (imageId) => {  
        setFormData((prevData) => ({  
            ...prevData,  
            images: prevData.images.filter((image) => image.id !== imageId),  
        }));  
    };  

    const handleEditImage = (imageId) => {  
      const input = document.createElement('input');  
      input.type = 'file';  
      input.accept = 'image/*';  
      input.onchange = (e) => {  
          const file = e.target.files[0];  
          if (file) {  
              // Generar un nuevo ID que sea único y que no colida con IDs existentes  
              const newId = Math.max(...formData.images.map(img => img.id), 0) + 1;  
  
              const newImage = {  
                  id: newId, // Usando un ID incremental  
                  deleted: null, // Establecer como null  
                  creationDate: null, // Establecer como null  
                  name: file.name,  
                  url: URL.createObjectURL(file),  
              
              };  
              console.log("Imagen editada:", newImage);  
              setFormData((prevData) => ({  
                  ...prevData,  
                  images: prevData.images.map((image) =>   
                      image.id === imageId ? newImage : image  
                  ),  
              }));  
          }  
      };  
      input.click();  
  };

    return (  
        <Container maxWidth="sm">  
            <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>  
                Edicion de Microemprendimiento  
            </Typography>  
            <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', color: 'black', fontFamily: 'Lato', margin: '1.5rem', textAlign: 'center', lineHeight:"25px"}}>  
                Edita el formulario de carga del Micoremprendimiento   
            </Typography>  

            <form onSubmit={handleSubmit}>  
                <CustomTextField  
                    id="nombre"  
                    label={<Typography variant="cf1">Nombre del Microemprendimiento</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="name"   
                    value={formData.name || ''}   
                    onChange={handleChange}  
                />  
                <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.nombre.subtitle}</Typography>   

                <CustomTextField  
                    id="categoria"  
                    label={<Typography variant="cf1">{categories.label}</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="category"   
                    value={formData.category?.id || ''}  
                    onChange={handleChange}  
                    select  
                >  
                {Object.values(categories).map((categoria) => (  
                    <MenuItem key={categoria.id} value={categoria.id}>   
                        <Typography variant="cf1" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', margin: '0 1rem 0 1rem' }}>  
                            {categoria.name}  
                        </Typography>  
                    </MenuItem>   
                ))}  
                </CustomTextField>   
                <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.categoria.subtitle}</Typography>   
                
                <CustomTextField  
                    id="subCategoria"  
                    label={<Typography variant="cf1">Subcategoria</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="subCategory"   
                    value={formData.subCategory || ''}   
                    onChange={handleChange}  
                />   
                <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.subcategoria.subtitle}</Typography>   
                 
                <CustomTextField  
                    id="provincia"  
                    label={<Typography variant="cf1">Provincia</Typography>}  
                    fullWidth  
                    margin="normal"    
                    name="province"   
                    value={formData.province?.id || ''}   
                    onChange={handleChange}  
                    select  
                >   
                    {Object.values(provinces).filter(item => item.id).map((province) => (  
                        <MenuItem key={province.id} value={province.id}>  
                            {province.name}  
                        </MenuItem>  
                    ))}  
                </CustomTextField>  
                <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.provincia.subtitle}</Typography>   

                <CustomTextField  
                    id="ciudad"   
                    label={<Typography variant="cf1">Ciudad</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="city"   
                    value={formData.city || ''}   
                    onChange={handleChange}  
                />  
                <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.ciudad.subtitle}</Typography>   
        
                <CustomTextField  
                    id="descripcion"  
                    label={<Typography variant="cf1">Descripcion</Typography>}  
                    fullWidth  
                    margin="normal"  
                    multiline  
                    rows={6}  
                    name="description"   
                    value={formData.description || ''}  
                    onChange={handleChange}  
                />  
                <Grid  
                    container  
                    justifyContent='space-between'  
                    alignItems='center'  
                    sx={{ padding: '0 10px' }}  
                >  
                    <Typography variant='body2' color='textSecondary'>  
                        Máximo 300 caracteres  
                    </Typography>  
                    <Typography variant='body2' color='textSecondary'>  
                        {`${formData.description.length}/300`}  
                    </Typography>  
                </Grid>  

                <CustomTextField   
                    id="masInformacion"   
                    label={<Typography variant="cf1">Mas Informacion</Typography>}  
                    fullWidth  
                    margin="normal"  
                    multiline  
                    rows={6}  
                    name="moreInformation"   
                    value={formData.moreInformation || ''}  
                    onChange={handleChange}  
                />  
                <Grid  
                    container  
                    justifyContent='space-between'  
                    alignItems='center'  
                    sx={{ padding: '0 10px' }}  
                >  
                    <Typography variant='body2' color='textSecondary'>  
                        Máximo 300 caracteres  
                    </Typography>  
                    <Typography variant='body2' color='textSecondary'>  
                        {`${formData.moreInformation.length}/300`}  
                    </Typography>  
                </Grid>  

                <Box display="flex" justifyContent="space-between" sx={{ marginTop: '1rem' }}>  
                    {formData.images.map((image) => (  
                        <Box key={image.id} sx={{ flexGrow: 1, padding: '0.5rem', textAlign: 'center', position: 'relative' }}>  
                            <img   
                                src={image.url}   
                                alt={image.name}   
                                style={{ width: '104px', height: '80px', maxHeight: '200px', objectFit: 'cover' }}   
                                onClick={() => window.open(image.url, "_blank")} // Abrir imagen en nueva pestaña  
                            />  
                            
                            <Box sx={{ position: 'absolute', top: 8, right: 8 }}>  
                                <IconContainer>  
                                    <IconButton onClick={() => handleEditImage(image.id)} color="primary" sx={{ padding: 0 }}>  
                                        <StyledEditIcon />  
                                    </IconButton>  
                                </IconContainer>  
                                <IconContainer>  
                                <IconButton onClick={() => handleDeleteImage(image.id)} color="secondary" sx={{ padding: 0 }}>  
                                        <StyledDeleteIcon />  
                                    </IconButton>  
                                </IconContainer>  
                            </Box>  
                        </Box>  
                    ))}  
                </Box>   

                <Button  
                    variant="contained"   
                    align="center"  
                    width="328px"  
                    onClick={handleSubmit}  
                    sx={{ marginTop: 2, backgroundColor: '#6E6F70', borderRadius:'100px', fontSize:'16px', width:'328px', justifyContent:'center', marginBottom: 2}}  
                >   
                    Guardar Cambios  
                </Button>  
            </form>        
        </Container>  
    );  
};  

export default FormMicroEdit;