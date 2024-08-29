import { createTheme } from '@mui/material/styles'

let coloresUbuntu = {
	blue: '#093c59',
	black: '#090909',
	green: '#226516',
	success: '#1d9129',
	warning: '#b86b11',
	error: '#bc1111',
	grey: '#d2d2d2',
	greyLight: '#eaeaea',
	greyDark: '#060f70',
	white: '#fdfdfd',
}

export const theme = createTheme({
	typography: {
		// Fuente por defecto para toda la aplicación
		fontFamily: ['Lato', 'sans-serif'].join(','),
		// Estilo personalizado para los encabezados h1
		h1: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '24px',
			color: coloresUbuntu.black,
		},
		// Estilo personalizado para los encabezados h2
		h2: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '24px',
			color: coloresUbuntu.black,
			textAlign: 'Left',
		},
		// Estilo personalizado para los encabezados h3
		h3: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 700,
			fontSize: '22px',
			lineHeight: '25px',
			color: coloresUbuntu.blue,
			textAlign: 'Left',
		},
		// Estilo personalizado para los encabezados h5
		h5: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 600,
			fontSize: '14px',
			lineHeight: '20px',
			color: coloresUbuntu.black,
			textAlign: 'left',
		},
		// Estilo personalizado para los encabezados h6
		h6: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 500,
			fontSize: '28px',
			lineHeight: '35px',
			color: coloresUbuntu.black,
			textAlign: 'center',
		},
		// Estilo personalizado para los campos de formularios
		cf1: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 500,
			fontSize: '16px',
			lineHeight: '24px',
			color: coloresUbuntu.black,
		},
		cf2: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 400,
			fontSize: '13px',
			lineHeight: '16px',
			color: coloresUbuntu.black,
		
		},



		// Estilo personalizado para los encabezados p
		p: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 500,
			fontSize: '28px',
			lineHeight: '33px',
			color: coloresUbuntu.black,
			textAlign: 'left',
		},
		// Estilo personalizado para el texto principal
		body1: {
			fontFamily: "'Open Sans', sans-serif",
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: '20px',
			color: coloresUbuntu.black,
		},
		// Estilo personalizado para los botones
		button: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 500,
			fontSize: '1rem',
			textTransform: 'none',
			letterSpacing: '0.1em',
		},
	},
	palette: {
		mode: 'light',
		primary: {
			main: coloresUbuntu.blue,
		},
		secondary: {
			main: coloresUbuntu.green,
		},
		success: {
			main: coloresUbuntu.success,
		},
		warning: {
			main: coloresUbuntu.warning,
		},
		error: {
			main: coloresUbuntu.error,
		},
		text: {
			primary: coloresUbuntu.black,
		},
		greyLight: {
			primary: coloresUbuntu.greyLight,
		},
	},
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px', // Bordes redondeados
					textTransform: 'none', // Mantener texto en el caso original
				},
				containedPrimary: {
					backgroundColor: 'primary',
					color: 'text',
					'&:hover': {
						backgroundColor: 'primary', // Color de fondo al pasar el ratón
					},
				},
				containedSecondary: {
					backgroundColor: '#6C757D',
					color: '#FFFFFF',
					'&:hover': {
						backgroundColor: '#5a6268', // Color de fondo al pasar el ratón
					},
				},
				sizeSmall: {
					padding: '6px 12px',
					fontSize: '0.875rem',
				},
				sizeLarge: {
					padding: '10px 20px',
					fontSize: '1.125rem',
				},
			},
		},
	},
})
