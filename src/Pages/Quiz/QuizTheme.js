import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


function QuizTheme({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Escolha um tema</Text>
    <Text style={styles.subtitle}>Nós acreditamos que pessoas transformam o mundo. Logo,
     temos 3 opções de temas que podem fazer de você um super colaborador de mudanças!</Text>
    <TouchableOpacity onPress={() => {navigation.navigate('Sustainability')}} style={styles.buttonSustainability}>
        <Image source={require( '../../img/tree.png')}></Image>
        <Text style={styles.buttonText}>Meio ambiente e Sustentabilidade</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonEntrepreneur}>
        <Image source={require( '../../img/entrepreneur.png')}></Image>
        <Text style={styles.buttonText}>Empreendedorismo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonTechnology}>
        <Image source={require( '../../img/robot.png')}></Image>
        <Text style={styles.buttonText}>Tecnologia e futuro</Text>
    </TouchableOpacity>
    </View>   
  );
}

QuizTheme.navigationOptions = {
  title: 'Escolher tema',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    paddingHorizontal: '5%',
  },
  title: {
    marginTop: 10,
    color: '#212121',
    fontSize: 23,
  },
  subtitle: {
    marginTop: 5,
    color: '#757575',
    fontSize: 16,
  },
  buttonSustainability: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    width: '100%',
    height: '20%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  buttonEntrepreneur: {
    marginTop: 20,
    backgroundColor: '#009688',
    borderRadius: 10,
    width: '100%',
    height: '20%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',  
  },
  buttonTechnology: {
    marginTop: 20,
    backgroundColor: '#00796B',
    borderRadius: 10,
    width: '100%',
    height: '20%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 16,
  },
});

export default QuizTheme;
