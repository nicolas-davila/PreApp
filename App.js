import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <AppRotas />
      <StatusBar style="auto" />
    </View>
  );
}
