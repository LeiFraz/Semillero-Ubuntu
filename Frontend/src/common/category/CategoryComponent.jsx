import { Box, Typography } from "@mui/material";
import economiaS from '../../assets/images/category/economia-social.png';


/* 
    - Hacerlo CLICKEABLE
    - El Contenedor de la imagen le puse un padding para que sea circular, pero creo que no es optimo hacerlo asi
    - Falta agregarle bien los estilos, ya sea usando el Theme o como aparece en el figma
*/
function CategoryComponent ({text, url}) {

    return (
        <>
            <Box sx={{
                backgroundColor: "#EAEAEA",
                mb: '20px',
                borderRadius: 5,
                display: "flex",
                padding: "15px 25px",
                overflow: 'hidden'}}>
                <Box sx={{width:'33px', minWidth:'33px', height:'36px', maxHeight: '36px', border: "2px solid #226516" , borderRadius: "50px", padding: "6px 6px 3px 6px",mr: '10px',float: "left"}}>
                    <img src={url} width='33' height='33' alt='Logo U Ingreso'></img>
                </Box>
                <Typography variant="h2" sx={{alignContent: "center", borderBottom: "1px solid green", fontSize: '16px', lineHeight: '25px', color: '#093C59'}}>{text}</Typography>  
            </Box>
        </>
    )
}

export default CategoryComponent;