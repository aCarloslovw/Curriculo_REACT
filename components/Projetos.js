import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView , TouchableOpacity ,Button,Linking } from 'react-native';

function Projetos({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container1}>
    <View style={styles.container}>
        {/* Container para a imagem */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/Mascote.png')} style={styles.bannerImage} />
        </View>
        
        {/* Container para o texto abaixo da imagem */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>
          O Oráculo das Lendas é um projeto dedicado ao universo do RPG, oferecendo uma plataforma abrangente para jogadores de todos os níveis de experiência. Com sistemas de jogo diversificados, tutoriais instrutivos e uma comunidade engajada, o Oráculo das Lendas visa proporcionar uma experiência imersiva e educativa. Seja para criar personagens épicos, explorar mundos de fantasia ou compartilhar histórias emocionantes, o Oráculo das Lendas é o lugar perfeito para todos os amantes do RPG se reunirem, aprenderem e se aventurarem juntos.
          </Text>
        </View>

  <View>
    
    <Button
  title="Visite o Site"
  onPress={() => Linking.openURL('https://oraculodaslendas.netlify.app/')}
/>
    {/* Adicione mais botões para outras telas conforme necessário */}
  </View>
  
</View>
</ScrollView>
    
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      container1: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      imageContainer: {
        width: '50%',
         // Altura do banner
        marginBottom: 20,
        marginTop:20,
        marginLeft:10,
        marginRight:10,
         // Espaçamento inferior para os botões
        height: 200,

      },
      bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20, // Espaçamento inferior entre a imagem e o texto
      },
      text: {
        fontFamily: 'fantasy', // Fonte temática de RPG
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
      },
      buttonContainer: {
        width: '80%', // Largura dos botões
      },
  });
export default Projetos;
