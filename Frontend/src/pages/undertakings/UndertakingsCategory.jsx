import { dataHero } from '../../assets/hero.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import { CardEntrepreneurship } from '../../components/cardEntrepreneurship/CardEntrepreneurship'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import servicesAxios from '../../services/axios'

export const UndertakingsCategory = () => {
	const { id } = useParams()
	const [datos, setDatos] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		const undertakings = async () => {
			try {
				//AUN NO FUNCIONA EL DE MICROEMPRENDIMIENTOS, NO HAY DATOS
				const response = await servicesAxios.undertakings(id)
				setDatos(response)
				console.log(response);
			} catch (error) {
				setError(error)
			}
		}

		undertakings()
	}, [])

	return (
		<div>
			<Hero publi={dataHero[3]} imageBG={dataImages[5].url} />
			<Box
				sx={{
					backgroundImage: `url('${dataImages[3].bgVerde}')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					padding: '0',
					paddingBottom: '30px',
				}}
			>
				<Box>
					{datos ? (
						datos.map(emp => (
							<CardEntrepreneurship
								key={emp.id}
								id={emp.id}
								title={emp.name}
								images={emp.images}
								subtitle={emp.subCategory}
								category={''}
								ubi={emp.city}
								description={emp.description}
								information={emp.moreInformation}
							/>
						))
					) : (
						<Typography
							variant='body1'
							sx={{ mb: '10px', textAlign: 'center', pt: '50px' }}
						>
							{' '}
							Cargando microemprendimientos...
						</Typography>
					)}
				</Box>
			</Box>
		</div>
	)
}
