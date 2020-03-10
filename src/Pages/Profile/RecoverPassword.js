import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function RecoverPassword() {
  return (
    <View style={styles.container}>
      <Image 
      source={require( '../../img/check.png')}
      style={styles.logo}/>
    <View>
      <Text style ={styles.text}>Enviamos um e-mail para você gerar a nova senha!</Text>
    </View>
    </View>
  );
}

RecoverPassword.navigationOptions = {
  title: "RECUPERAR SENHA",
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