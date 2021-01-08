import React from 'react'
import { hideAsync } from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'

import { useContextLogin } from '../contexts/login'
import RoutesLogado from '../routes/logado.routes'
import RoutesDeslogado from '../routes/deslogado.routes'

const Routes = () => {
	const { loading, usuario } = useContextLogin()

	return (
		<NavigationContainer>
			{!loading && hideAsync() && (!!usuario ? <RoutesLogado /> : <RoutesDeslogado />)}
		</NavigationContainer>
	)
}

export default Routes