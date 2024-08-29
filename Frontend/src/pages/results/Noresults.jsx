import { dataEmprendimientos } from '../../assets/emprendimientos.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import SearchBar from '../../common/searchBar/SearchBar'
import { Typography } from '@mui/material'
import ResultCard from '../../components/resultCard/ResultCard'

export const Noresults = () => {
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
						margin: '50px',
					}}
				>
					Resultados de tu busqueda
				</Typography>
			</h3>
			<ResultCard />
		</div>
	)
}
