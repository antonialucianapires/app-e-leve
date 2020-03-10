import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

export default function RegisteredDonation() {
  return (
    <View style={styles.container}>
      <Image 
      source={require( '../../img/check.png')}
      style={styles.logo}/>
    <View>
      <Text style ={styles.text}>Parabens!</Text>
    </View>
    <View>
      <Text style ={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
    </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonForm}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

RegisteredDonation.navigationOptions = {
  title: "DOAÇÃO REGISTRADA",
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
    paddingHorizontal: '5%'
  },
  logo:{
    alignSelf:'center',
  },
  text:{
    fontSize:23,
    color: '#FFF',
    margin: 20,   
  },
  text2:{
    color:'#FFFFFF',
    fontSize:16,
    justifyContent:'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
  },
  button:{
    width: '100%',
    height: 33,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
  }},
  buttonForm:{
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 16,
  },  
});
