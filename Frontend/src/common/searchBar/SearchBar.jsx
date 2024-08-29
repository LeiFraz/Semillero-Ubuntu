import * as React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'
import { useState } from 'react'
import { fetchData }from './SearchFunction'
import { useNavigate } from 'react-router-dom';  


const Search = styled('div')(() => ({
	position: 'relative',
	borderRadius: '100px',
	backgroundColor: 'white',
	width: '328px',
	padding: '0px 16px 0px 16px',
	height: '56px',
	gap: '16px',
	left: '16px',
}))

const SearchIconWrapper = styled('div')(() => ({
	padding: '0px 16px', //
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '0px',
	margin: '5% 2%',
}))

const StyledInputBase = styled(InputBase)(() => ({
	color: 'black',
	margin: '6% 15%',
	width: '100%',
	padding: '0px 16px',
	fontFamily: 'Lato',
	fontSize: '16px',
	lineHeight: '24px',
	fontWeight: 400,
	height: '16px',
}))


const SearchBar = ({ customStyles }) => {  
    const [searchQuery, setSearchQuery] = useState('');  
    const [searchResults, setSearchResults] = useState([]);  
	const [error, setError] = useState(false);
	const navigate = useNavigate();


	  const handleSearch = async () => {  
		try {  
		  const response = await fetchData(searchQuery);  
		  if (response.length === 0) {  
			setError(true);  
			navigate("/sinresultados");
		  } else {  
			setSearchResults(response);
			console.log('Resultados de la búsqueda:', response);
			navigate("/resultados", { state: { searchQuery } });
		  }  
		} catch (error) {  
		  console.error('Error al buscar:', error);  
		  setError(true);
		  navigate("/sinresultados");
		}  
	  };
 const handleKeyPress = (e) => {  
		if (e.key === 'Enter') {  
		  handleSearch();  
		}  
	  };  

	  if (error) {  
		navigate("/sinresultados");  
	  } 
	
	return (
		<Box>
			<Search
				sx={{
					display: 'flex',
					gap: '0px',
					margin: 'auto',
					width: '75%',
					minWidth: '310px',
					maxWidth: '500px',
					padding: '0px',
					left: '0px',
					textAlign: 'center',
					...customStyles,
					paddingRight: '15px',
				}}
			>
				<SearchIconWrapper sx={{ position: 'relative' }} onClick={handleSearch}>
					<SearchIcon />
				</SearchIconWrapper>

				<StyledInputBase
					placeholder='Buscar Microemprendimientos'
					value={searchQuery}  
					onChange={(e) => setSearchQuery(e.target.value)}  
				
					onKeyPress={handleKeyPress}
					sx={{ margin: '0px', alignSelf: 'center', padding: '0px' }}
				/>
			</Search>
		</Box>
	)
}
export default SearchBar; 
