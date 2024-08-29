import React from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../../components/hero/Hero'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'
import CardContactForm from '../../components/cardContactForm/CardContactForm'

export const ContactForm = () => {
	const location = useLocation()
	const title = location.state?.title
	const id = location.state?.id
	const name = `${localStorage.getItem('name')} ${localStorage.getItem('lastName') || ''}`
	const email = localStorage.getItem('email') || ''
	const phone = localStorage.getItem('phone') || ''

	return (
		<div>
			<Hero publi={dataHero[2]} imageBG={dataImages[4].url} />
			<CardContactForm
				title={title}
				id={id}
				name={name}
				email={email}
				phone={phone}
			/>
		</div>
	)
}
