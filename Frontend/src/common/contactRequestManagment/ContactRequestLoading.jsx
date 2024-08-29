import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesAxios from "../../services/axios";
import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import CardContactRequest from "../../components/cardContactRequest/CardContactRequest";

function ContactRequestLoading ( { datos, setDatosCompletos, setDatos, setError } ) {

    const navigate = useNavigate();
    const selection = (d) => {navigate(`/contactoSeleccionado`,{state: {mensaje: d}})};

    useEffect(() => {
        const gestion = async() => {
            try {
                const response = await servicesAxios.message();
                setDatosCompletos(response);
                //mostrar solo los no gestionados la primera vez que se renderiza
                const ng = response.filter((item) => !item.managed)
                setDatos(ng);
            } catch (error) {
                setError(error);
            }
        }

        gestion();
    },[]);

    return (
        <>
                {datos ? (
                        datos.map((d) => (
                            <Box key={d.id}>
                                <CardContactRequest id={d.id} title={d.microBusiness.name} description={d.requestDate} metodoClickArrow={selection} datoMetodoClick={d} colorCirculo={d.managed} />
                            </Box>
                    ))
                    ) : (
                        <Typography variant='body1'> No se pudieron cargar las solicitudes de contacto </Typography>
                )}
        </>
    )
}

export default ContactRequestLoading;