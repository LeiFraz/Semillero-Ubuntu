import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../pages/contactRequest/ContactSelected";
import { Box, Typography } from "@mui/material";

function ContactRequestManagment ( {noGestionados = () =>{console.log()}, gestionados= () =>{console.log()}, mensajeGestionado = false, gestionarMensaje = true}) {

    // si "mensajeGestionado/SELECCION" es FALSE --> el dato NO fue Gestionado cambia al COLOR Black  
    // si "mensajeGestionado/SELECCION" es TRUE --> el dato fue Gestionado cambia al COLOR Black

    // ---- PARA CAMBIAR COLOR GESTIONAR DATO DEBE SER TRUE

    // si "gestionarMensaje" es TRUE --> Se puede clickear: 'pointer' y permite cambiar de COLOR
    // si "gestionarMensaje" es FALSE --> No se puede clickear 'default'

    // "cambio" lo utilizo para indicar que se hizo un cambio en el select del ContactForm
    // (para pasar de No Gestionado a Gestionado)

    const [seleccion, setSeleccion] = useState(mensajeGestionado);
    const { cambio } = useContext(ContactContext);

    const changeColor = (color) => {
        if (gestionarMensaje) {
            setSeleccion(color);
        }
    };

    useEffect(() => {

        /* cambio se Setea en 2 ocaciones:
            1 - Cuando se cambia de estado de no gestionado a gestionado, con el select en el ContactForm
            2 - Cuando se actualiza la pagina, en el ContactSelected se llama al mensaje con la información
                actualizada, por lo que se vuelve a seter el cambio de acuerdo al mensaje.
        */
        if ( cambio ) {
            gestionarMensaje = true;
            changeColor(true);
            gestionarMensaje = false;
        }
    },[cambio])

    return (
        <Box sx={{
            mt: { xs: '20px', sm: '30px'},
            padding: { xs: '10px 15px' ,sm: '15px 20px'}
        }}>
            <Typography variant='h1' sx={{
                textAlign: 'center', 
                mb: {xs:'10px' ,sm: '20px'},
                fontSize: {xs:'24px', sm: '35px'}
                }}>
                    Solicitudes de contacto
            </Typography>
            
            <Box sx={{ 
                maxWidth: '500px',
                minWidth: '200px',
                margin: {xs: '2%', sm: '2% 20%', md: '2% 30%'},
                borderBottom: '1.5px solid',
                borderColor: '#093c59',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-evenly'}
            }>
                    <Box onClick={() => {
                            changeColor(false); 
                            noGestionados()}} 
                        sx={{
                            cursor: gestionarMensaje ? 'pointer' : 'default', 
                            borderBottom: seleccion === false ? '2px solid' : '',
                            padding: {xs: '5px', sm: '10px'}
                    }}>
                            <Typography variant='h2' sx={{
                                fontWeight: 'bold', 
                                fontSize: {xs:'16px', sm: '22px'},
                                color: seleccion === false ? 'black' : 'gray'
                            }}> 
                                    No gestionadas 
                            </Typography>
                    </Box>
                    <Box onClick={() => {
                            changeColor(true); 
                            gestionados()
                        }} 
                        sx={{
                            cursor: gestionarMensaje? 'pointer' : 'default',
                            borderBottom: seleccion === true ? '2px solid' : '',
                            padding: {xs: '5px', sm: '10px'}
                    }}>
                            <Typography variant='h2' sx={{
                                fontWeight: 'bold', 
                                fontSize: {xs:'16px', sm: '22px'},
                                color: seleccion === true ? 'black' : 'gray'
                            }}> 
                                    Gestionadas
                            </Typography>
                    </Box>
            </Box>
        </Box>
    )
}

export default ContactRequestManagment;