import React from 'react';
import { View, Button } from 'react-native';

function ObjectiveScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Dados Pessoais"
        onPress={() => navigation.navigate('PersonalData')}
      />
      <Button
        title="Objetivo"
        onPress={() => navigation.navigate('Objective')}
      />
      {/* Adicione mais botões para outras telas conforme necessário */}
    </View>
  );
}

export default ObjectiveScreen;
