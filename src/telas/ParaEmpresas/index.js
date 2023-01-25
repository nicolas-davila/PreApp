import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import estilos from './estilos';
import botton from '../../../assets/fundoLogoPlan.png'

export default function ParaEmpresas() {
    return <View style={estilos.container}>
        <Text style={estilos.titulo}>Envie seu email e cnpj e enviaremos sobre a disponibilidade</Text>
        <TextInput
                    placeholder="E-mail"
                    autoCapitalize="E-mail"
                    style={estilos.entrada}
                />                
                <TextInput
                    placeholder="CNPJ"
                    autoCapitalize="CNPJ"
                    style={estilos.entrada}
                />
                <TouchableOpacity style={estilos.botao}  
                onPress={() => {}}
                >
                    <Text style={estilos.textoBotao}>
                        Confirmar envio
                    </Text>
                </TouchableOpacity>
                

        <Image source={botton} style={estilos.imagem} />
    </View>
}