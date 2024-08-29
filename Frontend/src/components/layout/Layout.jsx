import React from 'react'
import { SwitchNavBar } from '../../common/switchNavBar/SwitchNavBar'
import { Outlet as Page } from 'react-router-dom'

export const Layout = () => {
	return (
		<main>
			<SwitchNavBar />
			<Page />
		</main>
	)
}
