import { useState, useEffect } from 'react'
import {
	Card,
	CardContent,
	Typography,
	Button,
	Collapse,
	Box,
} from '@mui/material'
import { Carousel } from '../carousel/Carousel'
import servicesAxios from '../../services/axios'

export const CardPublication = () => {
	const [publications, setPublications] = useState([])
	const [expandedCards, setExpandedCards] = useState({})

	useEffect(() => {
		const fetchPublications = async () => {
			try {
				const response = await servicesAxios.getPublications()
				setPublications(response)
			} catch (error) {
				console.log('Error al obtener las publicaciones:', error)
			}
		}

		fetchPublications()
	}, [])

	// Manejar el cambio de estado para una tarjeta específica
	const handleExpandClick = async id => {
		// Alternar el estado de expansión de la tarjeta específica
		setExpandedCards(prevState => ({
			...prevState,
			[id]: !prevState[id],
		}))

		// Aumentar las vistas de la publicación
		try {
			await servicesAxios.increaseViews(id)
		} catch (error) {
			console.log('Error al aumentar las vistas:', error)
		}
	}

	const formatCreationDate = creationDate => {
		const date = new Date(creationDate)
		return date.toLocaleDateString('es-AR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
	}

	return (
		<>
			{publications.slice(0, 3).map(publi => (
				<Card
					key={publi.id}
					sx={{
						maxWidth: 345,
						margin: 'auto',
						mt: 3,
						bgcolor: 'greyLight.primary',
						borderRadius: '16px',
					}}
				>
					<CardContent>
						<Typography variant='h2' component='div' margin={'4px 0 16px 0'}>
							{publi.title}
						</Typography>
						<Carousel images={publi.images} />
						<Typography variant='h5' component='div' margin={'20px 0 4px 0'}>
							{formatCreationDate(publi.creationDate) || 'Fecha no disponible'}
						</Typography>
						<Typography variant='body2' color='text.secondary' paragraph>
							{publi.description.split('\n')[0]}
						</Typography>
						<Collapse in={expandedCards[publi.id]} timeout='auto' unmountOnExit>
							{publi.description
								.split('\n')
								.slice(1)
								.map((paragraph, idx) => (
									<Typography
										key={idx}
										variant='body2'
										color='text.secondary'
										paragraph
									>
										{paragraph}
									</Typography>
								))}
						</Collapse>
						{publi.description.split('\n').length > 1 && (
							<Box sx={{ textAlign: 'center' }}>
								<Button
									size='small'
									onClick={() => handleExpandClick(publi.id)}
									color='primary'
									paddingTop='0px'
								>
									{expandedCards[publi.id] ? 'Ver menos' : 'Ver más'}
								</Button>
							</Box>
						)}
					</CardContent>
				</Card>
			))}
		</>
	)
}
