import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import SearchBar from '../../common/searchBar/SearchBar'
import { Typography } from '@mui/material'
import { CardEntrepreneurship } from '../../components/cardEntrepreneurship/CardEntrepreneurship'
import { fetchData } from '../../common/searchBar/SearchFunction'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Results = () => {
	const [searchResults, setSearchResults] = useState([])
	const location = useLocation()
	const searchQuery = location.state?.searchQuery || ''
	/* fetchData(searchQuery)
		.then((data) => setSearchResults(data))
		.catch((error) => console.error(error.message));
	}, []); // Realiza la llamada a la API al cargar el */

	useEffect(() => {
		if (searchQuery) {
			// Solo llama a la API si hay query
			fetchData(searchQuery)
				.then(data => setSearchResults(data))
				.catch(error => console.error(error.message))
		}
	}, [searchQuery])
	return (
		<div>
			<Typography sx={{ margin: '20px' }}>
				<SearchBar customStyles={{ backgroundColor: '#eaeaea' }} />
			</Typography>
			<h3>
				<Typography
					variant='h3'
					sx={{
						textAlign: 'center',
						fontSize: '24px',
						lineHeight: '30px',
						color: 'black',
						margin: '20px',
					}}
				>
					Resultados de tu busqueda
				</Typography>
			</h3>
			{searchResults.map((result, index) => (
				<CardEntrepreneurship
					id={index}
					title={result.title}
					images={result.images}
					subtitle={result.subtitle}
					category={result.category}
					ubi={result.ubi}
					description={result.description}
					information={result.information}
				/>
			))}
		</div>
	)
}
