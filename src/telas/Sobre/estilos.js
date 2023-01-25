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
        textAlign: 'center'
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
        
    }
});

export default estilos;