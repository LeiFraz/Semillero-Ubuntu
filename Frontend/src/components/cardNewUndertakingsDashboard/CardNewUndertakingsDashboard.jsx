import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import servicesAxios from "../../services/axios";


const CardNewUndertakingsDashboard = () => {

    const [cantidad, setCantidad] = useState('0');

    useEffect(() => {
        const searchUndertakings = async() => {
            try {
                const response = await servicesAxios.undertakingsAll();
                setCantidad(response.length);
            } catch (error) {
                console.log(error);
            }
        }

        searchUndertakings();
    }, [cantidad])

    return(
        <Box sx={{
            bgcolor: '#093C59',
            borderRadius: '8px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            minWidth: {xs: '260px', sm: '330px'},
            maxWidth: {xs: '260px', sm: '330px'},
            minHeight: '64px',
            margin: 'auto',
            mb: '10px',
            mt: '30px',
            padding: '8px 16px',
            gap: '10px',
            alignItems: 'center',
            overflow: 'auto',
            }}>
                <Box>
                    <Typography variant='h3' sx={{fontSize: '18px', color: '#FDFDFE'}}> Nuevos Microemprendimientos </Typography>
                </Box>
                <Box>
                    <Typography variant='h3' sx={{fontSize: '20px', fontWeight: '900' ,color: '#FDFDFE', textAlign: 'right'}}> {cantidad} </Typography>
                </Box>
        </Box>
    )
}

export default CardNewUndertakingsDashboard;