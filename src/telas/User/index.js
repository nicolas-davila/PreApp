import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import api from '../../servicos/api';

export default function User({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    // function Busca() {
    //     api.get('/posts/1').then(
    //         reponse => {
    //             console.log(reponse.data)
    //         }
    //     ).catch(error => {
    //         console.log(error)
    //     })
    // }
    return (
        <ScrollView>
            <View style={estilos.container}>
                <>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/102548678?v=4' }} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>Nome completo do usuário</Text>
                    <Text style={estilos.textoEmail}>Email do usuario</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>Nascimento</Text>
                            <Text style={estilos.seguidoresTexto}>XX/XX/XXXX</Text>
                        </View>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>Celular</Text>
                            <Text style={estilos.seguidoresTexto}>XX-XXXXX-XXXX</Text>
                        </View>
                    </View>

                </>
                <Text style={estilos.repositorios}>
                    Detalhes
                </Text>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>CPF: </Text>
                    <Text style={estilos.docs}>XXX.XXX.XXX</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>RG: </Text>
                    <Text style={estilos.docs}>XX.XXX.XXX</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Nacionalidade: </Text>
                    <Text style={estilos.docs}>Brasileiro</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Cidade natal: </Text>
                    <Text style={estilos.docs}>Itajubá</Text>
                </View>

                <Text style={estilos.repositorios}>
                    Endereço
                </Text>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>CEP: </Text>
                    <Text style={estilos.docs}>XXXXX-XXX</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Rua: </Text>
                    <Text style={estilos.docs}>XXXXXXXXXXXXX</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Número: </Text>
                    <Text style={estilos.docs}>00000</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Bairro: </Text>
                    <Text style={estilos.docs}>XXXXXXXXXXXXX</Text>
                </View>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Cidade: </Text>
                    <Text style={estilos.docs}>XXXXXXXXXXXXX</Text>
                </View>

                <Text style={estilos.repositorios}>
                    PCD
                </Text>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Laudo: </Text>
                    <Text style={estilos.docs}>Link</Text>
                </View>

                <Text style={estilos.repositorios}>
                    Gênero
                </Text>
                <View style={estilos.caixaDocs}>
                    <Text style={estilos.docs}>Gênero: </Text>
                    <Text style={estilos.docs}>????</Text>
                </View>
                <TouchableOpacity style={estilos.botao}

                >
                    <Text style={estilos.textoBotao}>
                        Atualizar dados
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
