import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../pages/contactRequest/ContactSelected";
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import servicesAxios from "../../services/axios";
import { ModalGeneric } from "../../components/modalGeneric/ModalGeneric";

function ContactForm () {
	//gestion: si se le asigna TRUE cambiamos al estado Gestionado
	//message: tenemos el mensaje, siempre lo actualizamos.

		const { setCambio, contact } = useContext(ContactContext);
		const [gestion, setGestion] = useState(false);
		const [message, setMessage] = useState(contact);
		const [isModalOpen, setIsModalOpen] = useState(false);

		const cambiarEstado = async() => {
			try {
				//actualizamos el mensaje, para ello debemos obtener el día actual
				const today = new Date();
				const year = today.getFullYear();
				const month = String(today.getMonth() + 1).padStart(2, '0');
				const day = String(today.getDay()).padStart(2, '0');
				message.managed = `${year}-${month}-${day}`;

				setMessage(message);

				const response = await servicesAxios.messageUpdate(message.id)

				if ( response ) {
					setIsModalOpen(true);
				}

			} catch ( error ) {
				console.log(error);
			} finally {
				setGestion(false);
			}	
		}
			
		useEffect(() => {
			const findIdMessage = async() => {
				try {
					//traemos el mensaje actualizado
					const mensaje = await servicesAxios.messageId(contact.id);
					setMessage(mensaje);

				} catch (error) {
					console.log(error)
				}
			}

			findIdMessage();

			//cuando se cambia el estado de gestion en el select, se renderiza la pagina y pasa por aqui
			if ( gestion ) {
				setCambio(true);
				cambiarEstado();
			}

		},[gestion]);
    
	return (
        <>
			<ModalGeneric titulo={'Exito'} mensaje={'El mensaje fue gestionado'} isOpen={isModalOpen}/>
			<Box sx={{
				maxWidth: '300px',
				margin: 'auto',
				padding: '15px 0px 0px'
			}}>
				{message.managed ? (
					<Box sx={{display: 'flex', marginBottom: '30px',alignItems: 'center', justifyContent: 'center'}}>
						<CircleIcon sx={{
						fontSize:'25px', 
						marginRight: '5px', 
						marginBottom: '10px',
						color: message.managed === null ? 'brown' : 'green' 
						}}/>
						<Typography variant='h3' sx={{
							fontSize: {xs: '18px', sm: '26px'}, 
							mb: '5px'
						}}> 
							Gestionado
						</Typography>
					</Box>
				) : ( 
						<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<CircleIcon sx={{
							fontSize:'25px', 
							marginRight: '5px', 
							marginBottom: '5px',
							color: message.managed === null ? 'brown' : 'green' 
							}}/>
							<Typography variant='h3' sx={{
								fontSize: {xs: '18px', sm: '26px'}, 
								mb: '5px'
							}}> 
								No Gestionado
							</Typography>
						</Box>
				)}
			</Box>

			<Box sx={{
				display: message.managed? 'none' : 'flex',
				justifyContent: 'right',
				margin: { xs:'0% 5% 5%', sm: '2% 20%', md: '2% 30%', lg: '2% 35%'},
			}}>
					
				<FormControl sx={{ m: 1, width: 152, mt: 2.5 ,bgcolor: '#EAEAEA' }}>
					<Select
						sx={{maxHeight: '40px'}}
						displayEmpty
						value=''
						input={<OutlinedInput />}
						onChange = {() => {setGestion(true); setIsModalOpen(true);}}
						renderValue={(selected) => {
							if (selected.length === 0) {
							return <em>Estado</em>;
							}

							return selected.join(', ');
						}}
						inputProps={{ 'aria-label': 'Without label' }}
					>
						<MenuItem
							key= '1'
							value= 'gestionada'
							sx={{ justifyContent: 'center', alignItems: 'center'}}
						>

							<CircleIcon sx={{
								fontSize:"large", 
								marginRight: '5px', 
								marginTop: '2px',
								color: 'green' 
							}}/>
							<Typography variant='p' sx={{
								fontSize: {xs: '16px', sm: '18px'}, 
							}}> 
								Gestionado
							</Typography>
						</MenuItem>
					</Select>
				</FormControl>
			</Box>

            <Typography
				sx={{
					fontFamily: 'Lato',
					textAlign: 'center',
					fontSize: '20px',
					fontWeight: 600,
					lineHeight: '25px',
					color: ' #093C59',
					marginBottom: '10px',
				}}
			>
				{message.microBusiness.name}
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Lato',
					textAlign: 'center',
					fontSize: '16px',
					fontWeight: 400,
					lineHeight: '25px',
					color: ' #090909',
					marginBottom: '20px',
				}}
			>
				Fecha de solicitud: {message.requestDate}
			</Typography>

			<Box sx={{margin: '0 4%'}}>
				<Box
					component='form'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						maxWidth: '400px',
						margin: '0 auto',
					}}
				>
					<TextField
						name='id'
						// value={ID contacto}
						sx={{ display: 'none' }}
					/>
					<TextField
						label='Apellido y Nombre'
						name='name'
						value={message.fullName}
						InputProps={{ readOnly: true }}
					/>
					<TextField
						label='Correo Electrónico'
						name='email'
						type='email'
						value={message.email}
						InputProps={{ readOnly: true }}
					/>
					<TextField
						label='Teléfono'
						name='phone'
						type='tel'
						value={message.phone}
						InputProps={{ readOnly: true }}
					/>
					<TextField
						label='Mensaje'
						name='message'
						value={message.message}
						sx={{ marginBottom: '-10px' }}
						inputProps={{ maxLength: 300, readOnly: true }}
						multiline
						rows={5}
					/>
				</Box>
			</Box>
        </>
    )
}

export default ContactForm;