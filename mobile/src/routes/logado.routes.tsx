import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Home from '../pages/Home'

const App = createBottomTabNavigator()

const RoutesLogado = () => {
	return (
		<NavigationContainer>
			<App.Navigator screenOptions={({ route }) => ({
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
					else if (route.name === 'Missas') { iconName = 'list-ul' }

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

				<App.Screen name="Home" component={Home} />
				<App.Screen name="Missas" component={Home} />
				<App.Screen name="Perfil" component={Home} />
			</App.Navigator>
		</NavigationContainer>
	)
}

export default RoutesLogado