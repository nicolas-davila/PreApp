import { Text, View, Image } from "react-native";
import estilos from './estilos';
import botton from '../../../assets/fundoLogoPlan.png'

export default function Sobre() {
    return <View style={estilos.container}>
        <Text style={estilos.titulo}>Assim nasce o PRE-APP</Text>
        <View style={estilos.sobre}>

            <Text style={estilos.texto}>A plataforma que foi desenvolvida para você "JOVEM E PCD's" e para você "EMPRESA", se conectarem de uma forma diferente e mais eficiente. </Text>
            <Text >Porque queremos resolver os seus problemas relacionados a contratação e inserção ao mesmo tempo que fornecemos um ambiente para uma escolha eficaz.</Text>

        </View>

        <Image source={botton} style={estilos.imagem} />
    </View>



}