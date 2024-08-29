import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import logoImg from '../../assets/images/navbar/Ubuntu Marcas-01.png'
import { useTheme } from '@mui/material/styles'

export default function NavBarAdmin({ showUserAvatar, userAvatar }) {
	const [openDrawer, setOpenDrawer] = useState(false)
	const theme = useTheme()
	const nombre = localStorage.getItem('name')
	const apellido = localStorage.getItem('lastName')

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer)
	}

	const menuItems = ['Inicio', 'Microemprendimientos', 'Publicaciones']

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				sx={{
					backgroundColor: 'white',
					color: 'black',
					boxShadow: 'none',
					height: '56px',
					padding: '0px 16px',
				}}
			>
				<Toolbar
					sx={{
						height: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<IconButton
						size='large'
						edge='start'
						aria-label='menu'
						sx={{ mr: 0 /*height: '100%', fontSize: '8rem' */ }}
						onClick={toggleDrawer}
					>
						{openDrawer ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',

							flexGrow: 1,
						}}
					>
						<img src={logoImg} alt='Logo' style={{ maxWidth: '100px' }} />
						{/* Renderiza el avatar solo si showUserAvatar es true */}
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', ml: '8px' }}>
						{userAvatar}
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: '256px', // Ancho de la lista
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: '240px', // Ancho de la lista
						backgroundColor: theme.palette.primary.main,
						color: 'white',
						top: '64px',
						paddingLeft: '16px',
						paddingTop: '8px',
					},
				}}
				open={openDrawer}
				onClose={toggleDrawer}
			>
				<List
					sx={{
						'& .MuiTypography-root': {
							fontFamily: 'theme.typography.fontFamily',
							color: 'white',
							fontSize: '18px',
							top: '32px',
							lineHeight: '20px',
							fontWeight: '500',
						},
					}}
				>
					<ListItem
						disablePadding
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							marginTop: '8px',
						}}
					>
						<Link onClick={toggleDrawer} to=''>
							<ListItemText primary='Administrador' />
						</Link>
					</ListItem>
					<ListItem
						
						disablePadding
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							marginTop: '8px',
						}}
					>
						<Link onClick={toggleDrawer} to='/dashboard'>
							<ListItemText primary='Dashboard Administrador' />
						</Link>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							marginTop: '8px',
						}}
					>
						<Link onClick={toggleDrawer} to='/microemprendimientosA'>
							<ListItemText primary='Microemprendimientos' />
						</Link>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							marginTop: '8px',
						}}
					>
						<Link onClick={toggleDrawer} to='/solicitudContacto'>
							<ListItemText primary='Solicitud de contacto' />
						</Link>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							marginTop: '8px',
						}}
					>
						<Link onClick={toggleDrawer} to='/publicaciones'>
							<ListItemText primary='Publicaciones' />
						</Link>
					</ListItem>
				</List>
			</Drawer>
		</Box>
	)
}
