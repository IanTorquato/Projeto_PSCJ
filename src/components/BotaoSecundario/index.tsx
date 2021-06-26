import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'

import styles from './styles'

interface PropsBtnSecundario extends Readonly<RectButtonProperties> {
  text: string
  styleComplements?: ViewStyle
}

const BotaoSecundario: React.FC<PropsBtnSecundario> = ({ text, styleComplements, ...rest }) => {
  return (
    <View style={styles.containerBtnSecundario}>
      <RectButton style={{ ...styles.botaoSecundario, ...styleComplements }} {...rest}>
        <Text style={styles.txtBotao}>{text}</Text>
      </RectButton>
    </View>
  )
}

export default BotaoSecundario
