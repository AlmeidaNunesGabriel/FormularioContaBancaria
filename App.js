import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AberturaConta from './assets/screens/AberturaConta';
import DadosInformados from './assets/screens/DadosInformados';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#f5f5f5" />
      <Stack.Navigator
        initialRouteName="AberturaConta"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="AberturaConta" 
          component={AberturaConta}
          options={{ title: 'Abertura de Conta' }}
        />
        <Stack.Screen 
          name="DadosInformados" 
          component={DadosInformados}
          options={{ title: 'Dados Informados' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}