import React from 'react'

const Options = ({ options, onSelectOption }) => {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
		>
			{options.map((option, index) => (
				<button
					key={index}
					onClick={() => onSelectOption(option)}
					style={{
						padding: '10px',
						margin: '5px 0',
						borderRadius: '10px',
						backgroundColor: '#1D9129',
						color: 'white',
						border: 'none',
					}}
				>
					{option.label}
				</button>
			))}
			<button
				onClick={() =>
					onSelectOption({ label: 'Volver al inicio', value: 'main' })
				}
				style={{
					padding: '10px',
					margin: '5px 0',
					borderRadius: '10px',
					backgroundColor: '#093C59',
					color: 'white',
					border: 'none',
				}}
			>
				Resetear
			</button>
		</div>
	)
}

export default Options
