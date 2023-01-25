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
        height: 34,
        width: '90%',
    }, 
    entradaMenor: {
        borderWidth: 2,
        borderColor: '#222d5a',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 5,
        borderRadius: 8,
        height: 34,
        width: '39%',
        marginHorizontal: '1%'
    }, 
    entradaMaior: {
        borderWidth: 2,
        borderColor: '#222d5a',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 5,
        borderRadius: 8,
        height: 34,
        width: '49%',
        marginHorizontal: '1%'
    },  
    entradaMaior70: {
        borderWidth: 2,
        borderColor: '#222d5a',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 5,
        borderRadius: 8,
        height: 34,
        width: '69%',
        marginHorizontal: '1%'
    }, 
    entradaMenor30: {
        borderWidth: 2,
        borderColor: '#222d5a',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 5,
        borderRadius: 8,
        height: 34,
        width: '19%',
        marginHorizontal: '1%'
    }, 
    entradaArea: {
        flexDirection: 'row',
        
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    imagemArea: {
        flexDirection: 'row',
        marginTop: 70,
       
    },  
    fundo: {
        backgroundColor: '#C0C0C0',
        width: '100%',
        height: 130,
        position: 'absolute',
    },
    textoFoto: {
        
        fontSize: 15,
        fontWeight: 'bold'
    },    
    textoEmail: {
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
    },
    botaoPcd: {
        backgroundColor: '#C4C4C4',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
        flexDirection: 'row'
    },
    imagemPcd: {
        width: 50,
        height: 50,
    },
    textoPcd: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    
    botton: {
        width: '100%',
        height: 50,   
    }
});

export default estilos;