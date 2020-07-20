import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const CadastrarUsuario = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={fundoLogin} style={styles.fundoLogin}>
                <Image source={logo} style={styles.imgLogo} />

                <TouchableOpacity onPress={handleNavigateBack} style={styles.btnVoltar}>
                    <Icon name="arrow-left" color="#fff" size={32} />
                </TouchableOpacity>

                <View style={styles.containerInputs}>
                    <Text style={styles.txtInput}>Nome:</Text>
                    <TextInput style={styles.input} placeholder="Digite seu nome" />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.txtInput}>E-mail:</Text>
                    <TextInput style={styles.input} placeholder="Digite seu e-mail" />
                </View>

                <RectButton style={styles.botao}>
                    <Text style={styles.txtBotao}>Cadastrar-se</Text>
                </RectButton>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    fundoLogin: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
    },

    imgLogo: {
        width: 130,
        top: '10%',
        resizeMode: 'contain'
    },

    btnVoltar: {
        top: '-20%',
        left: '-40%'
    },

    containerInputs: {
        top: '10%',
        width: '80%',
        marginBottom: 15
    },

    txtInput: {
        color: '#fff',
        left: 10,
        marginBottom: 5,
        fontSize: 16
    },

    input: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 30,
        height: 50,
        fontSize: 20,
        paddingLeft: 15
    },

    botao: {
        top: '20%',
        height: 50,
        backgroundColor: '#e41e25',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 15,
    },

    txtBotao: {
        color: '#fff'
    }
});

export default CadastrarUsuario