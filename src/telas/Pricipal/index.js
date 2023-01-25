import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import logo from '../../../assets/logo.png'
import botton from '../../../assets/fundoPlan.png'

export default function Principal({ navigation }) {

    return (

        <View style={estilos.container}>
            <>
                <View style={estilos.imagemArea}>
                    <Image source={logo} style={estilos.imagem} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
                    <Text style={estilos.sobre}>
                        Sobre
                    </Text>
                </TouchableOpacity>
            </>
            <TouchableOpacity style={estilos.botao}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={estilos.textoBotao}>
                    Fazer Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao}
            onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={estilos.textoBotao}>
                    Cadastro de pessoa física
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao}
            onPress={() => navigation.navigate('ParaEmpresas')}
            >
                <Text style={estilos.textoBotao}>
                    Para Empresas
                </Text>
            </TouchableOpacity>

            <Image source={botton} style={estilos.botton} />
        </View>

    );
}
