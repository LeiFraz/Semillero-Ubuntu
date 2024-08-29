import React, { useState } from 'react';  
import { Avatar, Button, Popover } from '@mui/material';  

const UserAvatar = ({ initials, onLogout }) => {  
  const [anchorEl, setAnchorEl] = useState(null);  

  const handleClick = (event) => {  
    setAnchorEl(event.currentTarget);  
  };  

  const handleClose = () => {  
    setAnchorEl(null);  
  };  

  const open = Boolean(anchorEl);  

  return (  
    <>  
      <Avatar  
        sx={{ bgcolor: 'black', width: 40, height: 40, cursor: 'pointer', fontSize: '16px', fontFamily: 'Lato',
          fontSize: '16px',
          fontWeight: 700,  lineHeight: '19.2px',
          textAlign: 'left',
          color: 'white',
          display: 'flex', 
          alignItems: 'left', 
          justifyContent: 'center',  
           }}  
        onClick={handleClick}  
      >  
        {initials}  
      </Avatar>  
      <Popover  
        open={open}  
        anchorEl={anchorEl}  
        onClose={handleClose}  
        anchorOrigin={{  
          vertical: 'bottom',  
          horizontal: 'center',  
        }}  
        transformOrigin={{  
          vertical: 'top',  
          horizontal: 'center',  
        }}  
        sx={{   
          marginTop: '10px',   
        }}  
      >  
        <Button  
          variant="contained"  
          onClick={onLogout}  
          sx={{
            background: '#D2D2D2',
            height: '40px',
            padding: '10px 20px',
            gap: '10px',
            borderRadius: '0px 0px 4px 4px',
            opacity: '0px',
            color: 'black',
            fontFamily: 'Lato',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '25px',
            textAlign: 'center',
            



          }}  
        >  
          Cerrar sesión  
        </Button>  
      </Popover>  
    </>  
  );  
};  
export default UserAvatar