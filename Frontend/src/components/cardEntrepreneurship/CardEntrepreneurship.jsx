import {
	Card,
	CardContent,
	Typography,
	Button,
	Collapse,
	IconButton,
	Box,
} from '@mui/material'
import { Carousel } from '../carousel/Carousel'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Estilo para el botón de expandir
const ExpandMore = ({ expand, ...props }) => (
	<IconButton
		{...props}
		sx={{
			transition: 'transform 0.3s',
			transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
		}}
	>
		<ExpandMoreIcon sx={{ fontSize: '2rem' }} />
	</IconButton>
)

export const CardEntrepreneurship = ({
	id,
	title,
	subtitle,
	images,
	ubi,
	category,
	description,
	information,
}) => {
	const [expanded, setExpanded] = useState(false)
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const navigate = useNavigate()

	const handleContactClick = () => {
		navigate('/contacto', { state: { title, id } })
	}

	return (
		<Card
			sx={{
				maxWidth: 345,
				margin: 'auto',
				mt: 5,
				bgcolor: 'greyLight.primary',
				borderRadius: '16px',
			}}
		>
			<CardContent>
				<Carousel images={images} />
				<Typography variant='h2' component='div' margin={'24px 0px 4px 0'}>
					{title}
				</Typography>
				<Typography
					variant='h3'
					component='div'
					margin={'0px 0px 8px 0px'}
					fontSize={'14px'}
					lineHeight={'16px'}
				>
					{subtitle}
				</Typography>
				<Typography
					variant='h3'
					component='div'
					fontSize={'14px'}
					margin={'0px 0 4px 0'}
					color={'text.primary'}
				>
					{category}
				</Typography>
				<Typography variant='h5' component='div' margin={'4px 0 4px 0'}>
					{ubi}
				</Typography>
			</CardContent>

			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography
						variant='body2'
						color='primary.main'
						fontWeight={'600'}
						paragraph
					>
						Descripción del Microemprendimiento
					</Typography>
					<Typography variant='body2' color='text.secondary' paragraph>
						{description}
					</Typography>
					<Typography
						variant='body2'
						color='primary.main'
						fontWeight={'600'}
						paragraph
					>
						Más información de interés
					</Typography>
					<Typography variant='body2' color='text.secondary' paragraph>
						{information}
					</Typography>
					<Box sx={{ textAlign: 'center' }}>
						<Button
							variant='contained'
							sx={{ borderRadius: '20px', mt: '20px', mb: '10px' }}
							onClick={handleContactClick}
						>
							<Typography variant='button'>Contactar</Typography>
						</Button>
					</Box>
				</CardContent>
			</Collapse>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					p: 0,
					height: '10px',
				}}
			>
				<ExpandMore expand={expanded} onClick={handleExpandClick} />
			</Box>
			<Button size='small' color='primary' paddingTop='0px'></Button>
		</Card>
	)
}
