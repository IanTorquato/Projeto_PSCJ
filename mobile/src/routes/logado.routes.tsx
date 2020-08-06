import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import Home from '../pages/Home'
import RotasMissas from './missas.routes'
import Perfil from '../pages/Perfil'

const { Navigator, Screen } = createBottomTabNavigator()

const RoutesLogado = () => {
	return (
		<Navigator screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				let iconName = 'ios-list'

				if (route.name === 'Home') {
					iconName = 'home'
					size = 28
				}
				else if (route.name === 'Perfil') {
					iconName = 'user-alt'
					size = 22
				}
				else if (route.name === 'RotasMissas') { iconName = 'list-ul' }

				return <FontAwesome5 name={iconName} size={size} color={color} />
			},
		})}
			tabBarOptions={{
				activeTintColor: '#eee',
				inactiveTintColor: 'gray',
				labelStyle: { fontSize: 12, marginBottom: 4, marginTop: -4 },
				tabStyle: { backgroundColor: '#111', marginTop: -1 }, style: { height: 56 }
			}}
		>
			<Screen name="Home" component={Home} />
			<Screen name="RotasMissas" component={RotasMissas} options={{ tabBarLabel: 'Missas' }} />
			<Screen name="Perfil" component={Perfil} />
		</Navigator>
	)
}

export default RoutesLogado