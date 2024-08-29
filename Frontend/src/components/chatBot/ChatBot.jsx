import { useState } from 'react'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import './ChatBotModal.css'
import { Typography } from '@mui/material'
import ChatWindows from './ChatWindow.jsx'
import ForumIcon from '@mui/icons-material/Forum'

const ChatBot = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	return (
		<div>
			<IconButton
				className='chatbot-icon'
				onClick={openModal}
				sx={{
					bgcolor: 'primary.main',
					position: 'fixed',
					bottom: 20,
					right: 20,
					color: 'white',
					zIndex: 1000,
				}}
			>
				<ForumIcon />
			</IconButton>
			<Modal
				open={modalIsOpen}
				onClose={closeModal}
				closeAfterTransition
				BackdropProps={{
					timeout: 500,
				}}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Slide direction='up' in={modalIsOpen} mountOnEnter unmountOnExit>
					<div className='modal-content'>
						<div className='chatbot-header'>
							<Typography variant='h6' textAlign={'left'} paddingLeft={'10px'}>
								Ubu
							</Typography>
							<IconButton onClick={closeModal} className='close-button'>
								<CloseIcon />
							</IconButton>
						</div>
						<div className='chatbot-body'>
							<ChatWindows />
						</div>
					</div>
				</Slide>
			</Modal>
		</div>
	)
}

export default ChatBot
