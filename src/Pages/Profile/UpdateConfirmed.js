import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function UpdateConfirmed({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
      source={require( '../../img/check.png')}
      style={styles.logo}/>
    <View>
      <Text style ={styles.text}>Perfil atualizado com sucesso!</Text>
    </View>
    </View>
  );
}
UpdateConfirmed.navigationOptions = {
  title: "Atualizar Perfil",
  headerStyle: {
    backgroundColor: '#009688',
  },
  headerTitleStyle: {
    color: '#FFFFFF',
  },
  headerTintColor: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    alignSelf:'center',
  },
  text:{
    fontSize:23,
    color: '#FFF',
    margin: 20,
    textAlign:'center',
  },
});