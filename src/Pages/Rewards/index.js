import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


function Rewards({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Ganhe mais pontos!</Text>
    <Text style={styles.subtitle}>Para ganhar mais pontos, você tem três opções abaixo:</Text>
    <TouchableOpacity style={styles.buttonTrash}>
        <Image source={require( '../../img/icon-e-lixo.png')}></Image>
        <Text style={styles.buttonText}>Lixo eletrônico</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigation.navigate('Quiz')}} style={styles.buttonQuiz}>
        <Image source={require( '../../img/icon-quiz.png')}></Image>
        <Text style={styles.buttonText}>Quiz</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonSearch}>
        <Image source={require( '../../img/icon-search.png')}></Image>
        <Text style={styles.buttonText}>Compartilhe</Text>
    </TouchableOpacity>
    </View>   
  );
}

Rewards.navigationOptions = {
  title: 'Ganhar Pontos',
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
    color: '#757575',
    fontSize: 16,
  },
  buttonTrash: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    width: '40%',
    height: '20%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  buttonQuiz: {
    marginTop: 20,
    backgroundColor: '#009688',
    borderRadius: 10,
    width: '40%',
    height: '20%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',  
  },
  buttonSearch: {
    marginTop: 20,
    backgroundColor: '#00796B',
    borderRadius: 10,
    width: '40%',
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

export default Rewards;
