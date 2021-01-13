import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { preventAutoHideAsync } from 'expo-splash-screen'

import { useFonts, Cookie_400Regular } from '@expo-google-fonts/cookie'
import { CormorantGaramond_400Regular, CormorantGaramond_700Bold } from '@expo-google-fonts/cormorant-garamond'
import { Merriweather_400Regular } from '@expo-google-fonts/merriweather'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { ShadowsIntoLightTwo_400Regular } from '@expo-google-fonts/shadows-into-light-two'

import Routes from './src/routes'
import { LoginProvider } from './src/contexts/login'
import { cores } from './src/styles'

export default function App() {
	const { preto } = cores.neutras

	useEffect(() => {
		(async () => await preventAutoHideAsync().catch(error => console.log(error)))()
	}, [])

	const [fontsLoaded, error] = useFonts({
		Cookie_400Regular, CormorantGaramond_400Regular, CormorantGaramond_700Bold,
		Merriweather_400Regular, Oswald_400Regular, Roboto_400Regular, ShadowsIntoLightTwo_400Regular
	})

	error && console.log(error)

	return fontsLoaded && (
		<LoginProvider>
			<StatusBar barStyle="light-content" backgroundColor={preto} />
			<Routes />
		</LoginProvider>
	)
}