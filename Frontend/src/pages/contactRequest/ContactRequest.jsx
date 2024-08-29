import { useState } from 'react'
import ContactRequestManagment from '../../common/contactRequestManagment/ContactRequestManagment';
import ContactRequestLoading from '../../common/contactRequestManagment/ContactRequestLoading';

function ContactRequest() {
    //estados
    const [datosCompletos, setDatosCompletos] = useState("");
    const [datos, setDatos] = useState("");
    const [error, setError] = useState("");

    //cambio los mensajes que se van a mostrar, si estan o no gestionados
    const gestionados = () => {
        const g = datosCompletos.filter((item) => item.managed)
        setDatos(g);
    }
    const noGestionados = () => {
        const ng = datosCompletos.filter((item) => !item.managed)
        setDatos(ng);
    }
    
    return (
        <>  
            <ContactRequestManagment noGestionados={noGestionados} gestionados={gestionados}/>
            <ContactRequestLoading datos={datos} setDatosCompletos={setDatosCompletos} setDatos={setDatos} setError={setError}/>
        </>
    )
}

export default ContactRequest;