import React from 'react';
import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Input } from 'react-native';

export default function ChangePassword({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior="padding">
    <ScrollView style={styles.scrollview}>    
    <Text style={styles.text}>Atualize sua senha preenchendo os campos a seguir:</Text>
    <TextInput style={styles.textinput}        
        placeholder="Senha atual"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        secureTextEntry
        returnKeyType="next"/>
    <TextInput style={styles.textinput}        
        placeholder="Nova senha"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        secureTextEntry
        returnKeyType="next"/>
    <TextInput style={styles.textinput}        
        placeholder="Confirmar nova senha"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        secureTextEntry/>
      <TouchableOpacity onPress={() => {navigation.navigate('PasswordChenged')}} style={styles.button}>
      <Text style={styles.textbutton}>Atualizar senha</Text>
      </TouchableOpacity>
      <Text style={styles.textrecuperacao}>Se você não lembra sua senha, recupere através do e-mail cadastrado:</Text>
      <TextInput style={styles.textinput}        
        placeholder="E-mail"
        placeholderTextColor= "#009688"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="send"/>
        <TouchableOpacity onPress={() => {navigation.navigate('RecoverPassword')}} style={styles.button}>
      <Text style={styles.textbutton}>Recuperar senha</Text>
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>      
    </SafeAreaView>
  );
}
ChangePassword.navigationOptions = {
  title: "TROCAR SENHA",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  text:{
    marginTop:70,
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
  },
  textrecuperacao:{
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
  },
  scrollview:{
    marginHorizontal:20,
  },
  textinput:{
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    paddingLeft: 15,
    fontSize:16,
    paddingHorizontal:'5%',
    width: "100%",
  },
  button:{
    paddingHorizontal:'5%',
    width: "100%",
    backgroundColor: '#4CAF50',
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
  textbutton:{
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 16,
  },
});
