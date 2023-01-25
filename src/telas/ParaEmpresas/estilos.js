import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'space-between',        
    },
    titulo: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 175,
        marginBottom: 50,
        textAlign: 'center',
        marginHorizontal: 10
    },
    sobre: {        
        textAlign: 'left',
        fontSize: 15,
        lineHeight: 20,
        marginHorizontal: 30,
    },
    texto: {
        marginBottom: 25,
    },
    imagem: {
        width: '100%',
        height: 150,
        marginTop: 150,
        
    },
    botao: {
        backgroundColor: '#222d5a',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#222d5a',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 5,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
});

export default estilos;