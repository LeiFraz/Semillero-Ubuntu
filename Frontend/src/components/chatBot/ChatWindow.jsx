import React, { useState, useRef, useEffect } from 'react'
import Message from './Message'
import Options from './Options'

const ChatWindow = () => {
	const [messages, setMessages] = useState([])
	const [currentLevel, setCurrentLevel] = useState('main')

	const messagesEndRef = useRef(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	const mainOptions = [
		{ label: '¿Qué es un microemprendimiento?', value: 'soyMicro' },
		{
			label: '¿Cómo puedo registrarme como inversor?',
			value: 'lloveraManana',
		},
		{
			label: '¿Cómo puedo registrarme como emprendedor?',
			value: 'temperaturaActual',
		},
	]

	const subOptions = {
		soyMicro: [
			{ label: '¿Cómo puedo empezar un microemprendimiento?', value: 'viento' },
			{
				label:
					'¿Cuáles son los beneficios de invertir en un microemprendimiento?',
				value: 'nublado',
			},
		],
		lloveraManana: [
			{
				label: '¿Qué documentos necesito para registrarme como inversor?',
				value: 'probabilidadLluvia',
			},
			{
				label: '¿Qué métodos de pago están disponibles para invertir?',
				value: 'horaLluvia',
			},
		],
		temperaturaActual: [
			{
				label: '¿Qué documentos necesito para registrarme como emprendedor?',
				value: 'calorFrio',
			},
			{
				label:
					'¿Cuáles son los requisitos para publicar un microemprendimiento?',
				value: 'sensacionTermica',
			},
		],
	}

	const responses = {
		soyMicro:
			'Un microemprendimiento es un negocio pequeño iniciado por un emprendedor.',
		lloveraManana:
			'Para registrarte como inversor, debes completar el formulario de registro y proporcionar la documentación necesaria.',
		temperaturaActual:
			'Para registrarte como emprendedor, debes completar el formulario de registro y proporcionar la documentación necesaria.',
		viento:
			'Puedes empezar un microemprendimiento identificando una oportunidad de negocio y desarrollando un plan.	',
		nublado:
			'Invertir en un microemprendimiento puede ofrecer altos retornos y apoyar la economía local.',
		probabilidadLluvia:
			'Para registrarte como inversor, necesitas un documento de identidad y una prueba de fondos.',
		horaLluvia:
			'Los métodos de pago disponibles incluyen transferencia bancaria y pagos electrónicos.',
		calorFrio:
			'Para registrarte como emprendedor, necesitas un documento de identidad y un plan de negocio.',
		sensacionTermica:
			'Para publicar un microemprendimiento, necesitas proporcionar una descripción detallada del proyecto y un plan de negocio.',
	}

	const handleSelectOption = option => {
		if (option.value === 'main') {
			setCurrentLevel('main')
			setMessages([])
		} else {
			setMessages([...messages, { text: option.label, isUser: true }])

			if (responses[option.value]) {
				setMessages(prevMessages => [
					...prevMessages,
					{ text: responses[option.value], isUser: false },
				])
			}

			if (subOptions[option.value]) {
				setCurrentLevel(option.value)
			} else {
				setCurrentLevel('main')
			}
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '450px',
				border: 'none',
				borderRadius: '10px',
				padding: '10px',
			}}
		>
			<div
				style={{
					flex: 1,
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{messages.map((msg, index) => (
					<Message key={index} text={msg.text} isUser={msg.isUser} />
				))}
				<div ref={messagesEndRef} />
			</div>
			<Options
				options={
					currentLevel === 'main' ? mainOptions : subOptions[currentLevel]
				}
				onSelectOption={handleSelectOption}
			/>
		</div>
	)
}

export default ChatWindow
