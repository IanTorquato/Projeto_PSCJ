import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import DetalhesMissa from './pages/DetalhesMissa'

const AppStack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none"
                screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>

                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="DetalhesMissa" component={DetalhesMissa} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes