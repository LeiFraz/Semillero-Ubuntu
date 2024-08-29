import React, { useState, useEffect } from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import servicesAxios from '../../services/axios'

const PublicationView = () => {
	const [publications, setPublications] = useState([])

	useEffect(() => {
		const fetchPublications = async () => {
			try {
				const response = await servicesAxios.getPublications()
				// Traemos solo las primeras 5 publicaciones
				setPublications(response.slice(0, 5))
			} catch (error) {
				console.log('Error al obtener las publicaciones:', error)
			}
		}

		fetchPublications()
	}, [])

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
			<Typography
				variant='h2'
				color='text.primary'
				textAlign='center'
				marginTop='40px'
				marginBottom='40px'
			>
				Visualizaciones por Publicación
			</Typography>

			{publications.map((publication, index) => (
				<Box
					key={index}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						border: '1px solid #093C59',
						borderRadius: '8px',
						padding: '8px 16px',
						margin: '15px 20px',
						maxWidth: '400px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							textAlign: 'left',
							flex: 1,
							gap: '7px',
						}}
					>
						<Typography
							variant='body1'
							color='text.primary'
							sx={{
								textAlign: 'left',
								textAlignLast: 'left',
								display: 'block',
							}}
						>
							{publication.title}
						</Typography>
						<Typography
							variant='body2'
							color='text.primary'
							sx={{
								textAlign: 'left',
								textAlignLast: 'left',
								display: 'block',
							}}
						>
							{formatCreationDate(publication.creationDate) ||
								'Fecha no disponible'}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton color='primary'>
							<VisibilityIcon />
						</IconButton>
						<Typography variant='body1' color='text.primary'>
							{publication.numberOfViews || 0}
						</Typography>
					</Box>
				</Box>
			))}
		</>
	)
}

export default PublicationView
