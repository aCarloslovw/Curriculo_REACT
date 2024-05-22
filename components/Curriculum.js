import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView , TouchableOpacity } from 'react-native';

class Curriculum extends React.Component {
  render() {
    
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
    <Text>joao.silva@example.com</Text>
  </View>
  <View style={styles.infoRow}>
    <Text style={styles.label}>Telefone:</Text>
    <Text>(11) 1234-5678</Text>
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
          <Text style={styles.jobTitle}>Desenvolvedor Front-end</Text>
          <Text style={styles.jobDetails}><Text style={styles.bold}>Empresa:</Text> ABC Solutions</Text>
          <Text style={styles.jobDetails}><Text style={styles.bold}>Período:</Text> Janeiro 2020 - Presente</Text>
          <Text style={styles.jobDetails}><Text style={styles.bold}>Descrição:</Text> Desenvolvimento e manutenção de interfaces de usuário utilizando HTML, CSS e JavaScript.</Text>
          
          <Text style={styles.jobTitle}>Estagiário em Desenvolvimento Web</Text>
          <Text style={styles.jobDetails}><Text style={styles.bold}>Empresa:</Text> XYZ Tech</Text>
          <Text style={styles.jobDetails}><Text style={styles.bold}>Período:</Text> Agosto 2018 - Dezembro 2019</Text>
          <Text style={styles.jobDetails}><Text style={styles.bold}>Descrição:</Text> Auxílio no desenvolvimento de aplicações web utilizando React.js e Node.js.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educação</Text>
          <Text><Text style={styles.bold}>Bacharelado em Ciência da Computação</Text> - Universidade ABC (2017 - 2021)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text>- HTML, CSS, JavaScript</Text>
          <Text>- React.js, Node.js</Text>
          <Text>- Git, GitHub</Text>
          <Text>- Design Responsivo</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Ver Dados Pessoais</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
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
        borderRadius: 50,
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
});

export default Curriculum;
