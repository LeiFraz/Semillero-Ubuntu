import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import servicesAxios from "../../services/axios";


const CardUndertakingsDashboard = () => {

    const [datos, setDatos] = useState([]);
    const [error, setError] = useState('');
    const [categoryUndertakings, setCategoryUndertakings] = useState([0,0,0,0]);

    useEffect(() => {
        
        //microemprendimientos de una categoria
        const undertakingsCategory = async(item) => {
            try {
                
                const response = await servicesAxios.undertakings(item.id);
                // const array = categoryUndertakings;
                // array[item.id-1] = response.length;
                // setCategoryUndertakings(array);
                setCategoryUndertakings(prev => {
                    const newCategoryUndertakings = [...prev];
                    newCategoryUndertakings[item.id - 1] = response.length;
                    return newCategoryUndertakings;
                });
            } catch (error) {
                setError(error);
            }
        }

        const searchCategory = async() => {
            try {
                const response = await servicesAxios.category();
                // response.map((item) => undertakingsCategory(item) )
                // console.log(categoryUndertakings)
                await Promise.all(response.map(item => undertakingsCategory(item)))
                setDatos(response);
            } catch (error) {
                setError(error);
            }
        }
        searchCategory();
    },[])

    return (
        <Box sx={{
            margin: 'auto',
                mt: '20px',
            minHeight: '100px',
            minWidth: {xs: '290px', sm: '363px'},
            maxWidth: {xs: '290px', sm: '363px'},
            bgcolor: '#EAEAEA',
            borderRadius: '8px',
        }}>
            <Box sx={{
                mt: '10px',
                borderBottom: '2px solid #226516'
            }}>
                <Typography variant='h3' sx={{
                    fontSize: {xs: '18px', sm: '20px'}, 
                    textAlign: 'center',
                    padding: '5px 0'}}>Microemprendimientos por categoría</Typography>
            </Box>

            {datos ? (
                datos.map((dato, index) => (
                    <Box key={index} sx={{
                        display: "flex",
                        margin: '15px',
                        overflow: 'hidden',
                        alignItems: 'center',
                        borderBottom: '1px solid #226516',
                        gap: '17px',
                    }}>
                            <Typography variant="h3" sx={{
                                alignContent: "center", 
                                fontSize: '16px',  
                                color: '#090909',
                                wordBreak: 'break-word'
                            }}>
                                {dato.name}
                            </Typography>  
                            <Typography variant='h3' sx={{
                                fontSize: '22px', 
                                fontWeight: '900',
                                color: '#090909', 
                                textAlign: 'right',
                            }}> 
                                {categoryUndertakings[dato.id-1]}
                            </Typography>
                        
                    </Box>
                    
                ))
            ) : (
                <Typography variant='h3' sx={{
                    fontSize: '16px', 
                    color: '#090909',
                    textAlign: 'center',
                }}>  
                    No se encontraron las categorias 
                </Typography>
            )}
        
        </Box>
    )
}

export default CardUndertakingsDashboard;