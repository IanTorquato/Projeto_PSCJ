import React, { useState } from 'react'
import { Text, TextInput, View, TextInputProps } from 'react-native'

import styles from './styles'

interface PropsInputText extends Readonly<TextInputProps> {
	placeholder: string
	inputValueEmpty: string
}

const InputText: React.FC<PropsInputText> = ({ placeholder, inputValueEmpty, ...rest }) => {
	const [inputFocus, setInputFocus] = useState(false)

	function setStylesTxtInput() {
		return (inputFocus || inputValueEmpty)
			? { ...styles.txtInputText, ...styles.txtInputTextHover }
			: { ...styles.txtInputText }
	}

	return (
		<View style={styles.viewInputText}>
			<TextInput {...rest} style={styles.inputText} onFocus={() => setInputFocus(true)}
				onBlur={() => setInputFocus(false)} />

			<Text style={setStylesTxtInput()}>{placeholder}</Text>
		</View>
	)
}

export default InputText