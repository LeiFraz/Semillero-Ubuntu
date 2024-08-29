import { Box } from "@mui/material";
import CardMessage from "./CardMessage";
import { useEffect, useState } from "react";
import servicesAxios from "../../services/axios";


const MessageManaged = () => {
    const [messages, setMessage] = useState('');
    const [managed, setManaged] = useState('0');
    const [managedNot, setManagedNot] = useState('0');
    //llamado a axios
    useEffect(() => {
        const count = (arreglo) => {
            const m = arreglo.filter(item => item.managed);
            setManaged(m.length)
            const mn = arreglo.filter(item => !item.managed);
            setManagedNot(mn.length)
            // console.log(managed);
        }
        const callMessage = async() => {
            try {
                const response = await servicesAxios.message();
                setMessage(response);
                count(response);
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        callMessage();
    },[managed, managedNot]);
    return ( 
        <Box sx={{
            display: "flex",
            margin: 'auto',
            mb: '10px',
            mt: '10px',
            gap: '20px'}}>
            <CardMessage color='green' text='Gestionados' number={managed}/>
            <CardMessage color='orange' text='No Gestionados' number={managedNot}/>
        </Box>
    )
}

export default MessageManaged;