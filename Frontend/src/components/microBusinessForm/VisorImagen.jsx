import React, { useState } from 'react';  
import { Box, IconButton, Typography } from '@mui/material';  
import { ArrowForward, ArrowBack } from '@mui/icons-material';  

const ImageViewer = ({ images, initialIndex }) => {  
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);  

  const nextImage = () => {  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
  };  

  const prevImage = () => {  
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);  
  };  

  return (  
    <Box sx={{ position: 'relative', textAlign: 'center' }}>  
      <Typography variant="h6" sx={{ position: 'absolute',color: 'white', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>  
        {currentIndex + 1}/{images.length}  
      </Typography>  
      <img  
        src={images[currentIndex].url}  
        alt={images[currentIndex].name}  
        style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}  
      />  
      <IconButton onClick={prevImage} sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>  
        <ArrowBack />  
      </IconButton>  
      <IconButton onClick={nextImage} sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>  
        <ArrowForward />  
      </IconButton>  
    </Box>  
  );  
};  

export default ImageViewer;