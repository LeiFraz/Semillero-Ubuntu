import React from 'react'
import { Box, Typography } from '@mui/material'
import { data } from '../../assets/objetivos.json'

const Objetives = () => {
	return (
		<Box
			sx={{
				marginTop: '30px',
				marginRight: '16px',
				marginLeft: '16px',
				top: '585px',
				left: '16px',
				padding: '8px 0px 16px 0px',
				gap: '8px',
				borderTop: '1px solid',
				borderBottom: '1px solid',
				borderColor: 'green',
			}}
		>
			<Typography
				variant='h3'
				sx={{
					gap: '0px',
					opacity: '0px',
					marginTop: '10px',
					textAlign: 'center',
				}}
			>
				Objetivos de Ubuntu
			</Typography>

			<Box
				component='ul'
				sx={{
					paddingLeft: '16px',
					listStyleType: 'disc',
					fontSize: '16px',
					fontWeight: 400,
					lineHeight: '20px',
				}}
			>
				{data.map((objetivo, index) => (
					<Box component='li' key={index} sx={{ margin: '20px 0' }}>
						<Typography>{objetivo.content}</Typography>
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default Objetives
