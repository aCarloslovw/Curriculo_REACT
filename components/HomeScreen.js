import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView , TouchableOpacity ,Button,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.personalInfo}>
          <Image source={require('../assets/Profile.jpeg')} style={styles.profileImage} />
          <View style={styles.personalInfo}>
<View style={styles.infoRow}>
  <Text style={styles.label}>Nome:</Text>
  <Text>Carlos Alberto de Castilhos Neto</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.label}>E-mail:</Text>
  <Text>neto2141@hotmail.com</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.label}>Telefone:</Text>
  <Text>(81) 98670-5347</Text>
</View>
</View>

        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objetivo</Text>
        <Text style={styles.objectiveText}>
          Sou um desenvolvedor web em busca de oportunidades para aplicar meus conhecimentos e habilidades
          no desenvolvimento de aplicações web inovadoras, proporcionando experiências excepcionais aos usuários.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        <Text style={styles.jobTitle}>Desenvolvedor Web</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Empresa:</Text> UFPE(Universidade Federal de Pernambuco )</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Período:</Text> Fevereiro 2024 - abril 2024</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Descrição:</Text> Desenvolvimento web e manutenção do site do Labsel, Laboratório do Luto da Federal, utilizando HTML, CSS e WordPress.</Text>
        
       </View>

       <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Extras</Text>
        <Text style={styles.jobTitle}>Game Jam</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Sediadora:</Text> CTRL ALT JAM</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Período:</Text> Maio 2024</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Descrição:</Text>Trabalhei no desenvolvimento de um jogo para a game jam, utilizando a linguagem Python com a engine Ren'Py.</Text>
        
        <Text style={styles.jobTitle}>Curso PHP</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Sediadora:</Text> Senac</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Período:</Text>Outubro 2023 - Janeiro 2024</Text>
        <Text style={styles.jobDetails}><Text style={styles.bold}>Descrição:</Text>Tive um curso com imersão de experiência de empresa, onde aprendi a usar o GitHub e adquiri conhecimentos em PHP, incluindo um certificado emitido pelo próprio Senac.</Text>
       
       </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <Text><Text style={styles.bold}>Tecnologo em Analise e Desenvolvimento de sistemas</Text> - Faculdade Senac Pernambuco (2023 - 2025)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text>- HTML, CSS, JavaScript, Java, PHP</Text>
        <Text>- React.js, Node.js</Text>
        <Text>- Git, GitHub</Text>
        <Text>- Design Responsivo</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
          <Button
            title="Projetos"
            onPress={() => navigation.navigate('Projetos')}
          />
          
          <Button
            title="GitHub"
            onPress={() => Linking.openURL('https://github.com/aCarloslovw')}
            icon={
              <Icon
                name="github"
                type="font-awesome"
                size={15}
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
      {/* Adicione mais botões para outras telas conforme necessário */}
    </View>
    </ScrollView>
  
  );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      personalInfo: {
        marginBottom: 10,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginRight: 10,
      },
      infoText: {
        flex: 1,
        marginBottom: 5,
      },
      label: {
        fontWeight: 'bold',
        marginRight: 5,},
      infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -15,
        marginTop:20 ,
      },
  objectiveText: {
    marginBottom: 10,
  },
  jobTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  jobDetails: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
export default HomeScreen;
