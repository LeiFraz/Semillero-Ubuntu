import { Box, Typography } from "@mui/material";


const CardMessage = ({color, text, number}) => {

    /* Treaer del endpoint del back, la cantidad de mensajes gestionados y no gestionados 
    podria filtrarlo/elegirlo por el color*/
    return (
        <>
            <Box sx={{
                width: {xs:'115px', sm: '152px'}, 
                height:'60px', 
                maxHeight: '60px', 
                border: `2px solid ${color}`, 
                borderRadius: "8px", 
                padding: "8px"
            }}>
                    <Typography variant="p" sx={{
                        alignContent: "center", 
                        fontSize: { xs: '16px' ,sm:'18px'}, 
                        lineHeight: '25px', 
                        color: '#090909'
                    }}>
                            {text}
                    </Typography> 
                    <Box sx={{
                        border: `1px solid ${color}`, 
                        width: '48px'
                    }}>
                    </Box>
                    <Typography variant="p" sx={{
                        fontSize: '20px',
                        fontWeight: '900',
                    }}> 
                        {number}
                    </Typography>
            </Box>
        </>
    )
}

export default CardMessage;