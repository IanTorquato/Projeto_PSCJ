import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen'
import { useFonts, Cinzel_400Regular } from '@expo-google-fonts/cinzel'
import { Cookie_400Regular } from '@expo-google-fonts/cookie'
import { Lora_400Regular } from '@expo-google-fonts/lora'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'

import Routes from './src/routes'
import { LoginProvider } from './src/contexts/login'

export default function App() {
	useEffect(() => {
		async () => await preventAutoHideAsync().catch(error => console.log(error))
	}, [])

	const [fontsLoaded, error] = useFonts({ Cinzel_400Regular, Cookie_400Regular, Lora_400Regular, Roboto_400Regular })

	error && console.log(error)

	return fontsLoaded && hideAsync() && (
		<LoginProvider>
			<StatusBar barStyle="light-content" backgroundColor="#000" />
			<Routes />
		</LoginProvider>
	)
}