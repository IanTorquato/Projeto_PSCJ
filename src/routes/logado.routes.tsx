import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Missas from '../pages/Missas'
import DetalhesMissa from '../pages/DetalhesMissa'
import Perfil from '../pages/Perfil'

import { cores } from '../styles'

const RoutesLogado = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { preto } = cores.neutras

	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: preto } }}>
			<Screen name="Home" component={Home} />
			<Screen name="Missas" component={Missas} />
			<Screen name="DetalhesMissa" component={DetalhesMissa} />
			<Screen name="Perfil" component={Perfil} />
		</Navigator>
	)
}

export default RoutesLogado