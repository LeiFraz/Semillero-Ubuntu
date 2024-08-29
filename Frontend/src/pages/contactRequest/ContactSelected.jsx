import { useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import ContactForm from '../../common/contactForm/ContactForm';
import ContactRequestManagment from '../../common/contactRequestManagment/ContactRequestManagment';
import servicesAxios from '../../services/axios';

export const ContactContext = createContext(false);

function ContactSelected () {
    /*
        Recibo el Mensaje de contacto que se manda desde ContactRequest.
        Seteo el estado de algunas variables para que se muestre de acuerdo al mensaje,
        si fue o no gestionado (mostrando una u otra opcion).
        Cuando se renderiza, siempre se trae el mensaje actualizado.

        cambio: Indica que se quiere cambiar el estado de No gestionada a Gestionada
        gestion: Indica si el mensaje fue o no gestionado
    */
    const location = useLocation();
    const { mensaje } = location.state;

    const [cambio, setCambio] = useState(false);
    const [gestion, setGestion] = useState(mensaje.managed ? true : false);
    const [contact, setContact] = useState(mensaje);

    useEffect(() => {

        const buscarMensaje = async() => {
            const response = await servicesAxios.messageId(mensaje.id)
            mensaje.managed = response.managed;
            setGestion(response.managed ? true : false);
            setContact(response);

            //lo seteo para que haga el cambio cuando se refresca
            setCambio(response.managed ? true : false);
        }
        buscarMensaje();

    },[]);

    return (
        <ContactContext.Provider value={{ cambio, setCambio, contact, setContact }}>
            <ContactRequestManagment mensajeGestionado={gestion} gestionarMensaje={false}/>
            <ContactForm />
        </ContactContext.Provider>
    )
}

export default ContactSelected;