import { dataHero } from '../../assets/hero.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import Category from '../../common/category/Category'
import { Hero } from '../../components/hero/Hero'
import { Box } from '@mui/material'

export const Undertakings = () => {
	return (
		<div>
			<Hero publi={dataHero[3]} imageBG={dataImages[5].url} />
			<Box
				sx={{
					backgroundImage: `url('${dataImages[3].bgVerde}')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					paddingTop: '20px',
					paddingBottom: '20px',
				}}
			>
				<Category cant={0} />
			</Box>
		</div>
	)
}
