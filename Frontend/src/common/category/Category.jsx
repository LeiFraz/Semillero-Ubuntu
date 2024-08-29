import { Box, Button, Link, Typography } from '@mui/material'
import CategoryComponent from './CategoryComponent'
import categorias from '../../assets/Category.json'; 

import { useEffect, useState } from 'react'
import servicesAxios from '../../services/axios';

/*
    - El boton no acepta adecuadamente la variante "containedPrimary"
    Me pasó lo mismo en la página de Login
 */
function Category({cant}) {
	const [datos, setDatos] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		
		const category = async() => {
			try {
				const response = await servicesAxios.category();
				// console.log(response.slice(0, 3));
				if(cant == 0)
				{
					setDatos(response);
				}else{

					setDatos(response.slice(0,cant));
				}
				
				// console.log(response[0].name)
			} catch (error) {
				setError(error);
			}
		}

		category();
		
	},[]);

	return (
		<>
			<Box sx={{minWidth:'280px', maxWidth: '500px', margin: 'auto', padding: '0px 20px',textAlign: 'center'}}>
				{/* APLICAR PAGINADO? O HACERLO DE OTRO MODO? */}
				{datos ? (
					datos.map(categoria => (
                        <Link underline='none' href={'/categoriaSeleccionada/'+categoria.id}>
                            <CategoryComponent
                                key={categoria.id}
                                text={categoria.name}
                                url={categorias.data[categoria.id - 1].url}
                            />
                        </Link>
					))
				) : (
					<Typography variant='body1' sx={{mb: '10px'}}> Cargando categorias...</Typography>
				)}
				{/* aplicar hundleClick no LINK: AVERIGUAR */}
			</Box>
		</>
	)
}

export default Category
