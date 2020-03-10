import React from 'react';
import { StyleSheet, 
  Text, 
  Image, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  View,
  KeyboardAvoidingView
} from 'react-native';



const ForgotPassword = ({navigation}) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View >
      <Image 
        source={require( '../../img/logo.png')}
        style={styles.logo}/>
      <Image 
        source={require('../../img/name.png')}
        style={styles.title} />
      <TextInput
        style={styles.inputRecuperar}
        placeholder="CPF ou E-mail"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        autoFocus
        returnKeyType="send"/>
      <TouchableOpacity onPress={() => {}} style={styles.buttonpassword}>
        <Text style={styles.buttonForm}>Recuperar senha</Text>
      </TouchableOpacity>
      <View style={styles.containerEntrar}>
      <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}} >
          <Text style={styles.linkText}>Entrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },
  logo:{
    alignSelf:'center',
  },
  title:{
    alignSelf:'center',
    marginBottom: '20%',
  },
  inputRecuperar: {
    backgroundColor: 'rgba(189, 189, 189, 0.35)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    paddingLeft: 15,
    textAlign: 'center',
  },
  buttonpassword: {
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
  containerEntrar:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: 'center',
  },
  linkText:{
    paddingHorizontal: 2,
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ForgotPassword;