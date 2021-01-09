import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../pages/Main'
import Login from '../pages/Login'
import CadastrarUsuario from '../pages/CadastrarUsuario'
import { cores } from '../styles'

const RoutesDeslogado = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { preto } = cores.neutras

	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: preto } }}>
			<Screen name="Main" component={Main} />
			<Screen name="Login" component={Login} />
			<Screen name="CadastrarUsuario" component={CadastrarUsuario} />
		</Navigator>
	)
}

export default RoutesDeslogado