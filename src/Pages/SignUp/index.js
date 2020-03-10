import React from 'react';
import { StyleSheet, Text, ScrollView, Image, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native';



const SignUp = ({navigation}) => (
<SafeAreaView style={styles.container}>
<KeyboardAvoidingView
    style={styles.containerUse}
    behavior="padding">
<ScrollView style={styles.scrollView}>
      <Image 
        source={require( '../../img/logo.png')}
        style={styles.logo}/>
      <Image 
        source={require('../../img/name.png')}
        style={styles.title} />
      <TextInput style={styles.inputForm}        
        placeholder="Nome"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="next"
        onSubmitEditing={() => { this.input_2.focus(); }}
        blurOnSubmit={false}/>
      <TextInput
        style={styles.inputForm}
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="next"
        ref={(input) => { this.input_2 = input; }}
        onSubmitEditing={() => { this.input_3.focus(); }}
        blurOnSubmit={false}/>
      <TextInput
        style={styles.inputForm}
        keyboardType="numeric"
        placeholder="CPF"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="next"
        ref={(input) => { this.input_3 = input; }}
        onSubmitEditing={() => { this.input_4.focus(); }}
        blurOnSubmit={false}/>
      <TextInput
        style={styles.inputForm}
        keyboardType="numeric"
        placeholder="CEP"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        returnKeyType="next"
        ref={(input) => { this.input_4 = input; }}
        onSubmitEditing={() => { this.input_5.focus(); }}
        blurOnSubmit={false}/>
      <TextInput
        style={styles.inputForm}
        placeholder="Senha"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        secureTextEntry
        returnKeyType="next"
        ref={(input) => { this.input_5 = input; }}
        onSubmitEditing={() => { this.input_6.focus(); }}
        blurOnSubmit={false}/>
      <TextInput
        style={styles.inputForm}
        placeholder="Confirmar senha"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        secureTextEntry
        ref={(input) => { this.input_6 = input; }}
        returnKeyType="send"ref={(input) => { this.input_7 = input; }}
        blurOnSubmit={false}/>
      <TouchableOpacity onPress={() => {navigation.navigate('Rewards')}} style={styles.button}>
      <Text style={styles.buttonForm}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerClick} onPress={() => {navigation.navigate('SignIn')}} >
        <Text style={styles.linkText}>Já sou cadastrado</Text>
      </TouchableOpacity>
</ScrollView>
</KeyboardAvoidingView>
</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#009688',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  logo:{
    alignSelf:'center',
    marginTop: '10%'
  },
  title:{
    alignSelf:'center',
    marginBottom: '15%',
  },
  inputForm: {
    backgroundColor: 'rgba(189, 189, 189, 0.35)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    paddingLeft: 15,
  },
  button: {
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
  buttonForm: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 16,
  },
  scrollView:{
    marginHorizontal: 5,
    padding: 25,
  },
  containerClick:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: 'center',
  },
  linkText:{
    paddingHorizontal: 2,
    color: '#FFFFFF',
    fontSize: 16,
    paddingBottom:30,
  },
  containerUse: {
    marginTop: 10,
  }
});

export default SignUp;