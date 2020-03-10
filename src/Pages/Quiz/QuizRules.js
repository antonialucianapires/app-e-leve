import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function QuizRules({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Antes de Começar</Text>
    <Text style={styles.text}>Olá! Antes de começar o jogo, atente-se às 
    regras para que sua experiência, diversão e aprendizado sejam realizados 
    com sucesso:</Text>
    <View style={styles.containerSubtitle}>
      <Text style={styles.subtitleBold}>Primeiro:</Text>
      <Text style={styles.subtitle}>nosso Quiz é diferente!</Text>
    </View>

    <Text style={styles.rules}>Antes de responder às questões, o Quiz é composto
     por um(1) vídeo e um(1) breve texto sobre o tema escolhido.</Text>

    <View style={styles.containerSubtitle}>
      <Text style={styles.subtitleBold}>Segundo:</Text>
      <Text style={styles.subtitle}>você nunca está de fora!</Text>
    </View>

    <Text style={styles.rules}>Após receber o conteúdo, você terá três(3) 
      questões para responder relacionadas ao conteúdo citado anteriormente. 
      </Text>

    <View style={styles.containerSubtitle}>
      <Text style={styles.subtitleBold}>Terceiro:</Text>
    <Text style={styles.subtitle}>com atenção, você ganha mais!</Text>
    </View>

    <Text style={styles.rules}>Com o conteúdo fresquinho você irá jogar com 
      maior segurança. Lembre-se, a resposta uma vez selecionada não poderá 
      ser trocada.</Text>

     <TouchableOpacity 
     onPress={() => {navigation.navigate('QuizTheme')}} 
     style={styles.button}>
            <Text style={styles.textButton}>Escolha um tema</Text>
         </TouchableOpacity >
    </View>   
  );
}

QuizRules.navigationOptions = {
  title: 'REGRAS DO QUIZ',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
  },
  title: {
    marginTop: 10,
    color: '#212121',
    fontSize: 23,
  },
  text: {
    marginTop: 5,
    color: '#757575',
    fontSize: 16,
  },
  containerSubtitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 4,
  },
  subtitleBold: {
    color: '#009688',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 5,
    color: '#009688',
    fontSize: 16,
  },
  rules: {
    backgroundColor: '#B2DFDB',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'auto',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    width: '100%',
    height: 33,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
textButton: {
    color: '#FFFFFF',
    fontSize: 16,
},
});

export default QuizRules;