import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'; // Seu componente principal
import Projetos from './components/Projetos'; // Componente para dados pessoais
import ObjectiveScreen from './components/ObjectiveScreen'; // Componente para objetivo
import Curriculum from './components/Curriculum';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Curriculo" component={HomeScreen} />
        <Stack.Screen name="Projetos" component={Projetos} />
        <Stack.Screen name="Objective" component={ObjectiveScreen} />
        {/* Adicione mais telas conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
