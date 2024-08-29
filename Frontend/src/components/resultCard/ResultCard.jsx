import * as React from 'react';  
import { styled } from '@mui/material/styles';  
import SearchOffIcon from '@mui/icons-material/SearchOff'; 
import Box from '@mui/material/Box';  
import Typography from '@mui/material/Typography';  

const StyledInputBase = styled('div')(({ theme }) => ({  
  backgroundColor: '#eaeaea',  
  border: 'none',  
  width: '328px',  
  height: '192px',  
  position: 'relative',  
  borderRadius: '8px',  
  padding: '24px 0',  
  justifyContent: 'center',  
  display: 'flex',  
  flexDirection: 'column',  
  alignItems: 'center',  
  gap: '16px',  
  overflow: 'hidden',  
  margin: 'auto',  
  textAlign: 'center', // Centrar el contenido horizontalmente  
}));  

const SearchIconWrapper = styled('div')(({ theme }) => ({  
  display: 'flex',  
  gap: '16px',  
  alignItems: 'center',  
  marginBottom: '16px', // Espacio entre el icono y los textos  
}));  

export default function ResultCard() {  
  return (  
    <Box sx={{ position: 'relative', textAlign: 'center', marginTop: '30vh', transform: 'translateY(-50%)' }}>  
      <StyledInputBase>  
        <SearchIconWrapper>  
          <SearchOffIcon sx={{ color: 'primary.main',  width: '48px', height: '48px' }} />  
        </SearchIconWrapper>  
        <Typography variant='h1' sx={{ color: 'primary.main' }}>No se encontraron resultados para tu búsqueda</Typography>  
        <Typography variant='p' sx={{ fontSize: 16, lineHeight: '20px' }}>Intenta nuevamente con otra consulta</Typography>  
      </StyledInputBase>  
    </Box>  
  );  
}