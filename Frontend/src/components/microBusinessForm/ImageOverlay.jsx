import React, { useState } from 'react';  
import { Dialog, IconButton, Box, Typography } from '@mui/material';  
import CloseIcon from '@mui/icons-material/Close';  
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';  
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';  

const ImageViewer = ({ images, initialIndex, onClose }) => {  
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);  

  const nextImage = () => {  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
  };  

  const prevImage = () => {  
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);  
  };  

  return (  
    <Box>  
      <Box  
        sx={{  
          display: 'flex',  
          justifyContent: 'space-between',  // Cambia 'center' a 'space-between'  
          alignItems: 'center',  
          position: 'absolute',  
          top: '30%',  
          left: '0',  
          right: '0',  
          transform: 'translateY(-100%)',  
          zIndex: 1,  
        }}  
      >  
        {currentIndex > 0 && (  
          <IconButton onClick={prevImage} sx={{ color: 'white', fontSize: '16px' }}>  
            <ArrowBackIosIcon />  
          </IconButton>  
        )}  
        <Typography variant="h6" sx={{ color: 'white', fontSize: '16px', fontFamily: 'Lato', textAlign: 'center', flexGrow: 1 }}>  
          {currentIndex + 1}/{images.length}  
        </Typography>  
        {currentIndex < images.length - 1 && (  
          <IconButton onClick={nextImage} sx={{ color: 'white', fontSize: '16px' }}>  
            <ArrowForwardIosIcon />  
          </IconButton>  
        )}  
      </Box>  
      <Box sx={{ position: 'relative', textAlign: 'center' }}>  
        <img  
          src={images[currentIndex].url}  
          alt={images[currentIndex].name}  
          style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}  
        />  
        {currentIndex > 0 && (  
          <IconButton onClick={prevImage} sx={{ color: 'white', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>  
            <ArrowBackIosIcon />  
          </IconButton>  
        )}  
        {currentIndex < images.length - 1 && (  
          <IconButton onClick={nextImage} sx={{ color: 'white', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>  
            <ArrowForwardIosIcon />  
          </IconButton>  
        )}  
        <IconButton onClick={onClose} sx={{ color: 'white', position: 'absolute', top: '10px', right: '10px' }}>  
          <CloseIcon />  
        </IconButton>  
      </Box>  
    </Box>  
  );  
};  

const ImageOverlay = ({ open, onClose, images, currentIndex }) => {  
  const handleModalClose = () => {  
    onClose();  
  };  

  return (  
    <Dialog  
      open={open}  
      onClose={handleModalClose}  
      fullScreen  
      PaperProps={{  
        sx: {  
          backgroundColor: 'rgba(0, 0, 0, 0.9)',  
          boxShadow: 'none',  
        },  
      }}  
    >  
      <Box  
        sx={{  
          display: 'flex',  
          flexDirection: 'column',  
          height: '100%',  
          position: 'relative',  
        }}  
      >  
        <Box  
          sx={{  
            flexGrow: 1,  
            display: 'flex',  
            justifyContent: 'center',  
            alignItems: 'center',  
          }}  
        >  
          <ImageViewer images={images} initialIndex={currentIndex} onClose={handleModalClose} />  
        </Box>  
      </Box>  
    </Dialog>  
  );  
};  

export default ImageOverlay;