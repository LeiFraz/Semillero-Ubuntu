import { Box, Typography } from "@mui/material";


export const NotFoundPage = () => {

    return (
        <>
            <Box sx={{textAlign: "center", mt: '20vh'}}>
                <Typography variant="h1" sx={{
                    fontSize: {xs: '20px', sm: '35px'}
                }}> 
                    404 
                </Typography>
                <Typography variant="h1" sx={{
                    fontSize: {xs: '16px', sm: '28px'}
                }}> 
                    Not Found 
                </Typography>
            </Box>
        </>
    )   
}