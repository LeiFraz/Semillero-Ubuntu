import { Box, Typography } from '@mui/material'
import React from 'react'

import MessageManaged from '../../components/messageManaged/MessageManaged'
import CardNewUndertakingsDashboard from '../../components/cardNewUndertakingsDashboard/CardNewUndertakingsDashboard'
import CardUndertakingsDashboard from '../../components/cardUndertakingsDashboard/CardUndertakingsDashboard'

import PublicationView from '../../components/publicationView/PublicationView'

export const DashBoardAdmin = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Box sx={{ textAlignLast: 'center' }}>
					<Typography
						variant='h1'
						sx={{
							mt: 8,
							mb: 4,
							fontSize: { xs: '25px', sm: '28px' },
							color: '#090909',
						}}
					>
						Dashboard Administrador
					</Typography>
					<Typography
						variant='h2'
						sx={{
							mt: 4,
							fontSize: '22px',
						}}
					>
						Estadisticas mesuales
					</Typography>
				</Box>

				<CardNewUndertakingsDashboard />

				<MessageManaged />

				<CardUndertakingsDashboard />

				<Box sx={{ textAlignLast: 'center' }}>
					<PublicationView />
				</Box>
			</Box>
		</>
	)
}
