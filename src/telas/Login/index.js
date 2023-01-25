import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import estilos from './estilos';
import logo from '../../../assets/logo.png'
import botton from '../../../assets/fundoPlan.png'

export default function Login({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    return (
        <View style={estilos.container}>
            <>

                <View style={estilos.imagemArea}>
                    <Image source={logo} style={estilos.imagem} />
                </View>
            </>
            <Text style={estilos.textoEmail}>Email do usuario</Text>
            <TextInput
                placeholder="E-mail"
                autoCapitalize="E-mail"
                style={estilos.entrada}
            />
            <Text style={estilos.textoEmail}>Senha do usuario</Text>
            <TextInput
                placeholder="Senha"
                secureTextEntry
                autoCapitalize="Senha"
                style={estilos.entrada}
            />
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('User')}
            >

                <Text style={estilos.textoBotao}>
                    Confirmar
                </Text>
            </TouchableOpacity>
            <Image source={botton} style={estilos.botton} />
        </View>

    );
}
