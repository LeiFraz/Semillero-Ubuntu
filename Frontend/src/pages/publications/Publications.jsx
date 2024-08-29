import { dataHero } from '../../assets/hero.json'
import { dataPublis } from '../../assets/publicaciones.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import { CardPublication } from '../../components/cardPublication/CardPublication'

export const Publications = () => {
	return (
		<div style={{ marginBottom: '30px' }}>
			<Hero publi={dataHero[0]} imageBG={dataImages[0].url} />
			{dataPublis?.map((publi, index) => (
				<CardPublication
					id={index}
					title={publi.title}
					images={publi.images}
					date={publi.date}
					content={publi.content}
				/>
			))}
		</div>
	)
}
