import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CardContactRequest ( {id, title, description, metodoClickArrow, datoMetodoClick, colorCirculo = null, optionCircle = true} ) {

    const [menuEl, setMenuEl] = useState(null);
    const open = Boolean(menuEl);
    const navigate = useNavigate();
    const editarMicro = () => {navigate(`/microeditar/${id}`)}

    const handleClick = (evento) => {
        setMenuEl(evento.currentTarget);
    }
    const handleClose = () => {
        setMenuEl(null);
    }

    return (
        <Box key={id} 
            sx={{
            backgroundColor: 'lightblue', 
            mb: '15px',
            height: '88px',
            minWidth: '260px',
            margin: { xs:'5%', sm: '2% 10%', md: '2% 20%'},
            borderRadius:'8px',
            justifyContent: 'space-between',
            padding: {xs: '8px 8px 8px 16px', sm: '20px 20px 20px 30px'},
            bgcolor: '#EAEAEA',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <CircleIcon sx={{
                        display: optionCircle? 'default' : 'none',
                        fontSize:"large", 
                        marginRight: '5px', 
                        marginBottom: '5px',
                        color: colorCirculo === null ? 'brown' : 'green' 
                    }}/>
                        <Typography variant='h3' sx={{
                            fontSize: {xs: '18px', sm: '26px'}, 
                            mb: '5px'
                        }}> 
                            {title}
                        </Typography>
                </Box>
                <Box sx={{ 
                    width: {xs: '180px', sm: '280px'}, 
                    borderBottom: {xs: '1px solid #093c59', sm: 'px solid #093c59'}, 
                    mb: '5px'
                }}>
                </Box>
                <Typography variant='p' sx={{
                    fontSize: {xs: '16px', sm: '22px'}
                }}> 
                    {description}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {xs: '12% 4% 12% 16%', sm: '10% 1% 10% 20%'}
                }}>
                    <Box>
                        
                        <MoreVertIcon sx={{
                            display: optionCircle? 'none' : 'default',
                            mb: '30px',
                            }}
                            onClick={handleClick}
                        />
                        <Menu
                            anchorEl={menuEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'basic-button'}}>
                                <MenuItem onClick={editarMicro}>Editar</MenuItem>
                                <MenuItem onClick={handleClose}>Ocultar</MenuItem>
                        </Menu>
                    </Box>
                    <KeyboardArrowRightIcon onClick={()=> metodoClickArrow(datoMetodoClick)} />
            </Box>
            
        </Box>
    )
}