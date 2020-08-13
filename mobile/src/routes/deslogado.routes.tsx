import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../pages/Main'
import Login from '../pages/Login'
import CadastrarUsuario from '../pages/CadastrarUsuario'

const { Navigator, Screen } = createStackNavigator()

const RoutesDeslogado = () => {
	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>
			<Screen name="Main" component={Main} />
			<Screen name="Login" component={Login} />
			<Screen name="CadastrarUsuario" component={CadastrarUsuario} />
		</Navigator>
	)
}

export default RoutesDeslogado