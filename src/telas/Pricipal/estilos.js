import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'space-between',
        
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
    
    imagem: {
        marginTop: 150,
        width: 250,
        height: 60,
    },
    sobre: {
        marginTop: 50,
        fontSize: 20,
        lineHeight: 28
    },
    
    textoNome: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        padding: 15
    },
    textoEmail: {
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
    },
    botton: {
        marginTop: 40,
        width: '100%',
        height: 300,
        
    }
});

export default estilos;