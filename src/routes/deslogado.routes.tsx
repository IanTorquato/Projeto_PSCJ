import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Inicial from '../pages/Inicial'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import { cores } from '../styles'

const RoutesDeslogado = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { preto } = cores.neutras

	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: preto } }}>
			<Screen name="Inicial" component={Inicial} />
			<Screen name="Login" component={Login} />
			<Screen name="Cadastro" component={Cadastro} />
		</Navigator>
	)
}

export default RoutesDeslogado