import React, { useState } from 'react';  
import { Container, TextField, MenuItem, Button, Typography, Box, Grid } from '@mui/material';   
import UploadIcon from '@mui/icons-material/Upload';  
import { styled } from '@mui/material/styles';  
 
const CustomTextField = styled(TextField)(({ theme }) => ({  
  ...theme.typography.cf1,  
}));  

const FormMicroemprendimiento = ({  
    initialValues,
    title,  
    subtitle,   
    button2,   
    fieldLabels,  
    onSubmit,
}) => {  

  const [formData, setFormData] = useState(initialValues); // Inicializamos el estado con los valores iniciales  
  const [name, setName] = useState('');  
  const [category, setCategory] = useState('');  
  const [subCategory, setSubCategory] = useState('');  
  const [country, setCountry] = useState('');  
  const [province, setProvince] = useState('');  
  const [city, setCity] = useState('');  
  const [description, setDescription] = useState('');  
  const [moreInformation, setMoreInformation] = useState('');  
  const [images, setImages] = useState([]);  

  const handleImageSelect = (event) => {  
    const selectedFiles = Array.from(event.target.files);  
    if (images.length + selectedFiles.length > 3) {  
      alert('Puedes subir un máximo de 3 imágenes.');  
      return;  
    }  
    setImages((prevImages) => [...prevImages, ...selectedFiles]);  
  };   

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value }); // Actualiza el estado del formulario en función del campo modificado  
  };  
  const handleSubmit = (event) => {  
    event.preventDefault();  
    if (onSubmit) {  
      onSubmit({ name, description, moreInformation, city, category, subCategory, province, images: images.length > 0 ? images : null, });  
    }  
  };  
  

  return (  
    <Container maxWidth="sm">  
      <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>  
        {title}  
      </Typography>  
      <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', color: 'black', fontFamily: 'Lato', margin: '1.5rem', textAlign: 'center', lineHeight:"25px"}}>  
        {subtitle}  
      </Typography>  
      <form onSubmit={handleSubmit}>  

        <CustomTextField  
          id="nombre"
          label={<Typography variant="cf1">{fieldLabels.nombre.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={name}  
          onChange={(e) => setName(e.target.value)}  
          required  
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.nombre.subtitle}</Typography> 

        <CustomTextField  
        id="categoria"
          label={<Typography variant="cf1">{fieldLabels.categoria.label}</Typography>}  
          fullWidth  
          margin="normal"  
          select  
          value={category}  
          onChange={(e) => setCategory(e.target.value)}  
          required  
        >  
      
      {Object.values(fieldLabels.categoria).map((categoria) => (  
          <MenuItem key={categoria.id} value={categoria.id}>  
            <Typography variant="cf1" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', margin: '0 1rem 0 1rem' }}>  
              {categoria.name}  
            </Typography>  
            
          </MenuItem>  ))} 
         
        
     

         
        </CustomTextField>  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.categoria.subtitle}</Typography>  

        <CustomTextField  
          id="subCategoria"
          label={<Typography variant="cf1">{fieldLabels.subcategoria.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={subCategory}  
          onChange={(e) => setSubCategory(e.target.value)}  
          
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.subcategoria.subtitle}</Typography>  

        <CustomTextField  
          id="pais"
          label={<Typography variant="cf1">{fieldLabels.pais.label}</Typography>}  
          fullWidth  
          margin="normal"
          select  
          value={country}  
          onChange={(e) => setCountry(e.target.value)}  
            >
           {Object.values(fieldLabels.pais).map((pais) => (  
          <MenuItem key={pais.id} value={pais.id}>  
            <Typography variant="cf1" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', margin: '0 1rem 0 1rem' }}>  
              {pais.name}  
            </Typography>  
            
          </MenuItem>  ))} 
         </CustomTextField>
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.pais.subtitle}</Typography>  

              
      <CustomTextField
        id="provincia"
        label={<Typography variant="cf1">{fieldLabels.provincia.label}</Typography>}  
        fullWidth  
        margin="normal"  
        select  
        value={province}  
        onChange={(e) => setProvince(e.target.value)}  
        required  
      >  
        {Object.values(fieldLabels.provincia).map((provincia) => (  
          <MenuItem key={provincia.id} value={provincia.id}>  
            <Typography variant="cf1" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', margin: '0 1rem 0 1rem' }}>  
              {provincia.name}  
            </Typography>  
            
          </MenuItem>  ))} 
         
        
      </CustomTextField> 
      <Typography variant="body2" color="textSecondary">{fieldLabels.provincia.subtitle}</Typography>  
        <CustomTextField 
          id="ciudad" 
          label={<Typography variant="cf1">{fieldLabels.ciudad.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={city}  
          onChange={(e) => setCity(e.target.value)}  
          required  
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.ciudad.subtitle}</Typography> 

        <CustomTextField  
          id="descripcion"
          label={<Typography variant="cf1">{fieldLabels.descripcion.label}</Typography>}  
          fullWidth
          margin="normal"  
          multiline  
          rows={6}  
          value={description}  
          onChange={(e) => setDescription(e.target.value)}  
          inputProps={{ maxLength: 300 }}  
          required  
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
						{`${description.length}/300`}
					</Typography>
				</Grid>

        <CustomTextField 
          id="masInformacion" 
          label={<Typography variant="cf1">{fieldLabels.informacion.label}</Typography>}  
          fullWidth  
          margin="normal"  
          multiline  
          rows={6}  
          value={moreInformation}  
          onChange={(e) => setMoreInformation(e.target.value)}  
          inputProps={{ maxLength: 300 }}  
          required  
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
						{`${moreInformation.length}/300`}
					</Typography>
				</Grid>
        <Grid container spacing={2}>   
          <Grid item xs={6}>  </Grid>  
      <Grid item xs={6}>  
        <Box  
      sx={{  
        display: 'flex',  
        flexDirection: 'column',  
        justifyContent: 'flex-end',
        padding: 2,  
        border: 'none',  
        borderRadius: '8px',  
        width: '300px', // Ajusta el ancho según sea necesario  
        margin: ' 1rem auto',  
      }}  
    >  
      <Button  
        variant="contained"  
        component="label"   
        sx={{ marginBottom: 2, borderRadius:'100px', width:'162px', height:'42px', padding:'10px, 16px, 10px, 16px', display: 'flex', 
          justifyContent: 'flex-start'  }} 
      >  
        <UploadIcon sx={{color:'white', marginRight: 1, width:'24px', height:'24px'}} /> 
        <Typography variant="button" sx={{ fontSize:'14px'}} >Subir imagen</Typography>  
        <input  
          type="file"  
          hidden  
          align="right"
          accept="image/*"  
          multiple  
          onChange={handleImageSelect}
        />  
      </Button>  
      </Box>
      {images.length === 0 && (  
              <>  
                <Typography variant="body2" color="textSecondary" align="left" width="152px">  
                  *Requerida al menos una imagen  
                </Typography>  
                <Typography variant="body2" color="textSecondary" align="left" width="152px">  
                  Hasta 3 imágenes. Máximo 3Mb cada una.  
                </Typography>  
              </>  
            )}  
      </Grid>
      </Grid>
      {images.length > 0 && (  
              <Box display="flex" flexDirection="row" marginTop={2} width='328px'>  
                {images.map((image, index) => (  
                  <Box key={index} marginRight={2} display="flex" flexDirection="column" alignItems="center">  
                    <img src={URL.createObjectURL(image)} alt={`imagen-${index}`} style={{ width: '100px', height: 'auto' }} />  
                    <Typography variant="body2" textAlign="center">{image.name}</Typography>  
                  </Box>  
                ))}  
              </Box>  
            )}  
          
          
      <Box
       display="flex"  
       justifyContent="center"  // Centra horizontalmente  
          >
      <Button  
        variant="contained"   
        align= "center"
        width= "328px"
        onClick={handleSubmit}
        sx={{ marginTop: 2, backgroundColor: '#6E6F70', borderRadius:'100px', fontSize:'16px', width:'328px', justifyContent:'center', marginBottom: 2}}  
      >  
        { button2 || 'Enviar'}
      </Button>  
    </Box>  
      </form>  
    </Container>  
  );  
};  

export default FormMicroemprendimiento;