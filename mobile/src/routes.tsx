import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import CadastrarUsuario from './pages/CadastrarUsuario'

const AppStack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none"
                screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>

                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes