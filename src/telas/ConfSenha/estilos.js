import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    imagemArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: -75,
        backgroundColor: '#FFF',
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    fundo: {
        backgroundColor: '#C0C0C0',
        width: '100%',
        height: 156,
    },
    
    
    textoEmail: {
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
    },
    
    botton: {
        marginTop: 40,
        width: '100%',
        height: 150,        
    }    
});

export default estilos;