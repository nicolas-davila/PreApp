import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import estilos from './estilos';
import botton from '../../../assets/fundoLogoPlan.png'

export default function ConfSenha({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    return (
            <View style={estilos.container}>
                <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/102548678?v=4' }} style={estilos.imagem} />
                    </View>
                               
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    autoCapitalize="Senha"
                    autoComplete='password'
                    style={estilos.entrada}
                />                
                <TextInput
                    placeholder="Repetir Senha"
                    secureTextEntry
                    autoCapitalize="Repetir Senha"
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
