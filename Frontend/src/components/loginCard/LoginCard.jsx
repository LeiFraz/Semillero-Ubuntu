import React from 'react'
import logoCard from '../../assets/images/loginPage/logo card ingreso registro.png'
import logoButton from '../../assets/images/loginPage/google-logo.png'
import Card from '@mui/material/Card'
import { Box, Typography, Button } from '@mui/material'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginCardComponent() {
	const navigate = useNavigate()

	const login = useGoogleLogin({
		flow: 'auth-code',
		onSuccess: async googleData => {
			try {
				// console.log('Google Data:', googleData)
				const res = await axios.post(
					'http://localhost:8080/login/oauth2/code/google',
					{
						code: googleData.code,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)

				const data = res.data
				// console.log(data)

				localStorage.setItem('token', res.data.token)
				// console.log('Token:', res.data.token)
				localStorage.setItem('rol', res.data.rol)
				localStorage.setItem('name', res.data.name)
				localStorage.setItem('lastName', res.data.lastName)
				localStorage.setItem('email', res.data.email)
				// localStorage.setItem('phone', res.data.phone)

				navigate('/dashboard')
			} catch (error) {
				console.error('Login Failed:', error.response || error)
			}
		},
		onError: error => {
			console.error('Login Failure:', error)
		},
	})

	return (
		<Card
			sx={{
				height: 352,
				margin: '0 16px',
				borderRadius: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'start',
				flexDirection: 'column',
				paddingTop: '20px',
			}}
		>
			<Box display='block' textAlign='center' mb='10px'>
				<Typography
					variant='h6'
					sx={{
						mt: 2,
						display: 'block',
						textAlign: 'center',
						lineHeight: '32px',
						fontWeight: 700,
						mb: '23px',
					}}
				>
					Ingreso <br />
					Administrador
				</Typography>
				<img src={logoCard} width='33' height='75' alt='Logo U Ingreso'></img>
			</Box>
			<Button
				variant='contained'
				onClick={() => login()}
				sx={{
					mt: '60px',
					borderRadius: '100px',
					width: '200px',
					height: '40px',
					gap: '4px',
				}}
			>
				<img
					src={logoButton}
					width='24px'
					height='24px'
					alt='Google logo'
				></img>
				<Typography
					variant='button'
					sx={{
						fontSize: '14px',
						lineHeight: '30px',
						width: '150px',
						height: '30px',
						letterSpacing: '0',
						textTransform: 'inherit',
					}}
				>
					Continuá con Google
				</Typography>
			</Button>
		</Card>
	)
}

function LoginCard() {
	return (
		<GoogleOAuthProvider clientId='842850903587-amnr9sepa7h13hq1c4r2q4f93h661295.apps.googleusercontent.com'>
			<LoginCardComponent />
		</GoogleOAuthProvider>
	)
}

export default LoginCard
