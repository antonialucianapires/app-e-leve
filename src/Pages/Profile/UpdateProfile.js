import React from 'react';
import { StyleSheet, Image, TextInput, View, ScrollView, TouchableOpacity, Text } from 'react-native';

export default function Update({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollview}>
    <Image source= {require('../../img/Elipse.png')} style={styles.logo}/>
    <TextInput style={styles.textinput}
        placeholder="Nome do usuário"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="next"/>
    <TextInput  style={styles.textinput}      
        placeholder="E-mail"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="next"/>
    <TextInput style={styles.textinput}
        placeholder="CPF"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        keyboardType='default'
        maxLength = {11}
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="send"/>
    <TouchableOpacity onPress={() => {navigation.navigate('UpdateConfirmed')}} style={styles.button}>
    <Text style={styles.textbutton}>Atualizar perfil</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}} style={styles.button2}>
    <Text style={styles.textbutton2}>Deletar perfil</Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

Update.navigationOptions = {
  title: "Atualizar Perfil",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal:'5%',
  },
  logo:{
    alignSelf:"center",
    marginTop: 20,
    marginBottom: 10,
  },
  textinput:{
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    paddingLeft: 20,
    fontSize:20,
    width: "100%",
    color: '#009688',
  },
  scrollview:{
    marginHorizontal:1,
  },
  button:{
    width: "100%",
    backgroundColor: '#009688',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    marginTop: 20,
    shadowOffset: {
    width: 4,
    height: 4,
    },
  },
  textbutton:{
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 20,    
  },
  button2:{
    width: "100%",
    backgroundColor: '#EE5B64',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
    width: 4,
    height: 4,
    },
  },
  textbutton2:{
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 20,
  },
});
