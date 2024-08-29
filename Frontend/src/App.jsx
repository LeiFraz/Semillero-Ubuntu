import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import ChatBot from './components/chatBot/ChatBot'

export default function App() {
	return (
		<>
			<main>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
				<ChatBot />
			</main>
		</>
	)
}
