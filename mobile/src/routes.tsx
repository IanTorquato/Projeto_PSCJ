import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Login from './pages/Login'
import CadastrarUsuario from './pages/CadastrarUsuario'
import Home from './pages/Home'

const AppStack = createStackNavigator()

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator headerMode="none"
				screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>

				<AppStack.Screen name="Main" component={Main} />
				<AppStack.Screen name="Login" component={Login} />
				<AppStack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
				<AppStack.Screen name="Home" component={Home} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes