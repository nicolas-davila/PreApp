import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfSenha from '../telas/ConfSenha/Index';
import Cadastro from '../telas/Cadastro';
import Login from '../telas/Login';
import Principal from '../telas/Pricipal';
import Sobre from '../telas/Sobre';
import User from '../telas/User';
import ParaEmpresas from '../telas/ParaEmpresas';

const Stack = createNativeStackNavigator();

function AppRotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTransparent: true,
                headerStyle: {backgroundColor: '#aaaaaa'}
                }} >
                
                <Stack.Screen name="Home" component={Principal} />                
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="User" component={User} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="ConfSenha" component={ConfSenha} />
                <Stack.Screen name="ParaEmpresas" component={ParaEmpresas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppRotas;