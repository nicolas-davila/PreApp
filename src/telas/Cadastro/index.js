import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import estilos from './estilos';
import avatar from '../../../assets/avatar.png';
import botton from '../../../assets/fundoPlan.png';
import botaoPcd from '../../../assets/pcd.png'

export default function Cadastro({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    return (
        <View style={estilos.container}>
            <View style={estilos.fundo} />
            <View style={estilos.imagemArea}>
                <TouchableOpacity>
                    <Image source={avatar} style={estilos.imagem} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={estilos.textoFoto}>Escolha seu avatar </Text>
                    <Text style={estilos.textoFoto}>ou envie uma foto</Text>
                </View>

            </View>
            <TextInput
                placeholder="Nome completo"
                autoCapitalize="Nome completo"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="Email"
                autoCapitalize="Email"
                style={estilos.entrada}
            />
            <View style={estilos.entradaArea}>
                <TextInput
                    placeholder="Nascimento"
                    autoCapitalize="Nascimento"
                    style={estilos.entradaMenor}
                />
                <TextInput
                    placeholder="Celular"
                    autoCapitalize="Celular"
                    style={estilos.entradaMaior}
                />

            </View>
            <View style={estilos.entradaArea}>
                <TextInput
                    placeholder="CPF"
                    autoCapitalize="CPF"
                    style={estilos.entradaMaior}
                />
                <TextInput
                    placeholder="RG"
                    autoCapitalize="RG"
                    style={estilos.entradaMenor}
                />
            </View>
            <TextInput
                placeholder="Cidade Natal"
                autoCapitalize="Cidade Natal"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="CEP"
                autoCapitalize="CEP"
                style={estilos.entrada}
            />
            <View style={estilos.entradaArea}>
                <TextInput
                    placeholder="Rua"
                    autoCapitalize="Rua"
                    style={estilos.entradaMaior70}
                />
                <TextInput
                    placeholder="Nº"
                    autoCapitalize="Nº"
                    style={estilos.entradaMenor30}
                />
            </View>

            <TextInput
                placeholder="Bairro"
                autoCapitalize="Bairro"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="Cidade onde mora"
                autoCapitalize="Cidade"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="Defina seu Gênero"
                autoCapitalize="Cidade"
                style={estilos.entrada}
            />
            <TouchableOpacity style={estilos.botaoPcd}
                onPress={() => {}}
            >
                <Image source={botaoPcd} style={estilos.imagemPcd} />
                <Text style={estilos.textoPcd}>
                    Enviar lauda para PCD
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('ConfSenha')}
            >
                <Text style={estilos.textoBotao}>
                    Confirmar
                </Text>
            </TouchableOpacity>
            <Image source={botton} style={estilos.botton} />
        </View>

    );
}
