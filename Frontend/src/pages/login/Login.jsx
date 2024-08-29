import LoginCard from '../../components/loginCard/LoginCard'
import { Box } from '@mui/material'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'

function Login() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					justifyContent: 'space-between',
					backgroundImage: `url('${dataImages[2].url}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.3)',
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
						zIndex: 1,
						justifyContent: 'center',
					}}
				>
					<LoginCard />
				</Box>
			</Box>
		</>
	)
}

export default Login
