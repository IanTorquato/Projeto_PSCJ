import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Home = () => {
    const navigation = useNavigation()

    function toCadastrarUsuario() {
        navigation.navigate('CadastrarUsuario')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={fundoLogin} style={styles.fundoLogin}>
                <Image source={logo} style={styles.imgLogo} />

                <View style={styles.fundoTxtSagrado}>
                    <Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
                </View>

                <View style={styles.containerBtns}>
                    <RectButton onPress={toCadastrarUsuario} style={styles.botao}>
                        <Text style={styles.txtBotoes}>Entrar</Text>
                    </RectButton>
                </View>

                <View style={styles.containerBtns}>
                    <RectButton onPress={toCadastrarUsuario} style={styles.botao}>
                        <Text style={styles.txtBotoes}>Cadastrar</Text>
                    </RectButton>
                </View>
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

    fundoTxtSagrado: {
        width: '85%',
        paddingBottom: 8,
        top: '8%',
        backgroundColor: '#e41e2577',
        borderRadius: 25
    },

    txtSagrado: {
        fontFamily: 'Cookie_400Regular',
        fontSize: 42,
        lineHeight: 50,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 5
    },

    containerBtns: {
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        top: '15%',
        marginTop: 30,
        backgroundColor: '#00000077',
        height: 50,
        width: 170
    },

    botao: {
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtBotoes: {
        fontFamily: 'Roboto_400Regular',
        color: '#fff',
        fontSize: 24,
        textShadowColor: '#00000088',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        height: 50,
        top: 5
    }
});

export default Home