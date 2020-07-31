import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper'

const Missas: React.FC = () => {
  const [valorSelecionado, setValorSelecionado] = useState('')

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.viewContainer}>
        <Text style={styles.txtMissas}>Missas</Text>

        <View style={styles.viewFiltro}>
          <Text style={styles.txtFiltro}>Filtro:</Text>

          <RadioButton.Group onValueChange={localId => setValorSelecionado(localId)} value={valorSelecionado}>
            <View style={styles.viewRadio}>
              <RadioButton value="1" color="#ffb02c" />
              <Text style={styles.txtFiltro}>Centro</Text>
            </View>

            <View style={styles.viewRadio}>
              <RadioButton value="2" color="#ffb02c" />
              <Text style={styles.txtFiltro}>Termas</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#444'
  },
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#444',
    flex: 1,
    paddingVertical: 16
  },

  txtMissas: {
    borderBottomColor: '#ffb02c',
    borderBottomWidth: 1,
    borderTopColor: '#ffb02c',
    borderTopWidth: 1,
    color: '#ffb02c',
    fontFamily: 'Cinzel_400Regular',
    fontSize: 40,
    paddingVertical: 8,
    textAlign: 'center',
    textShadowColor: '#000000dd',
    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 15,
    width: '100%'
  },

  viewFiltro: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8
  },

  viewRadio: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8
  },

  txtFiltro: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  }
})

export default Missas