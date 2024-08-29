import React from 'react'

const Message = ({ text, isUser }) => {
	return (
		<div
			style={{
				alignSelf: isUser ? 'flex-end' : 'flex-start',
				backgroundColor: isUser ? '#093C59' : '#e5e5ea',
				color: isUser ? 'white' : 'black',
				padding: '10px',
				borderRadius: '10px',
				marginBottom: '10px',
				maxWidth: '60%',
			}}
		>
			{text}
		</div>
	)
}

export default Message
