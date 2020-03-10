import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,  ScrollView} from 'react-native';
import { Video } from 'expo-av';


function Sustainability({navigation}) {
  return (
    <ScrollView 
    style={styles.container}>
    <Video 
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="contain"
      shouldPlay={true}
      useNativeControls={true}
      isLooping={false}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/elevevideosquiz.appspot.com/o/modulo%201.mp4?alt=media&token=cae99492-7c75-407a-a42d-c2a8a2080fde'}}
      style={styles.video}></Video>
    <Text style={styles.text}>De acordo com o estudo Global E-Waste Monitor, realizado pela Organização das Nações Unidas (ONU), 
    o Brasil é o maior produtor de lixo eletrônico da América Latina — e 7º maior do mundo. Anualmente, o país produz 1,5 megatonelada de lixo 
    eletrônico, e apenas 2% de todo esse montante tem um descarte adequado. </Text>
    <Text style={styles.text}>
    Além da crescente quantidade de resíduos que é gerada, outro problema do e-lixo é o despejo inadequado. Os aparelhos têm uma composição química complexa 
    de substâncias altamente tóxicas ao meio ambiente, como o risco de contaminação do solo, lençol freático e vazamento de algum tipo de radiação. Além disso, 
    a sua decomposição pode trazer muitos prejuízos à saúde humana, como o Berílio substância encontrada em smartphones, monitores e TV’s, que pode causar 
    intoxicações respiratórias agudas ou crônicas e até mesmo câncer no pulmão. 
    </Text>
    <TouchableOpacity onPress={() => {navigation.navigate('Quiz')}} style={styles.button}>
        <Text style={styles.buttonText}>Responder Quiz</Text>
    </TouchableOpacity>
    </ScrollView>   
  );
}

Sustainability.navigationOptions = {
  title: 'Meio ambiente e Sustentabilidade',
};

const styles = StyleSheet.create({
  container: {  
    backgroundColor: '#ffffff',
    height: '100%',
    paddingHorizontal: '5%',
  },
  video: {
    width: '100%',
    height: 180,
  },
  text: {
    marginTop: 10,
    color: '#000000',
    fontSize: 15,
    textAlign: 'justify'
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#4CAF50',
    width: '100%',
    height: 33,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Sustainability;
