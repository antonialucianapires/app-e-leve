import React, { useEffect, useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import axios from 'axios'

export default function SignIn({ navigation }){
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')


  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://06f6b9b1.ngrok.io/users')
      setData(result.data)
    }
    fetchData()
  }, [])

  return(
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <View>
      <Image source={require('../../img/logo.png')} style={styles.logo} />
      <Image source={require('../../img/name.png')} style={styles.title} />
      <TextInput
        style={styles.input}
        placeholder='Login'
        placeholderTextColor='#FFFFFF'
        autoCapitalize='none'
        autoCorrect={false}
        underlineColorAndroid='transparent'
        autoFocus
        returnKeyType='next'
        onChangeText={value => setEmail({email: value})}
        value={email}

      />
      <TextInput
      
        key="senha"
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor='#FFFFFF'
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        underlineColorAndroid='transparent'
        onChangeText={value => setPassword({password: value})}
        value={password}
   />
      <TouchableOpacity
        onPress={
          function() {
            if ((email.email === `${data.map(item => item.email)}`) && 
                (password.password === `${data.map(item => item.password)}`))
                {
                  {navigation.navigate('Main')}
              console.log("funcionou?")  
            }
            else{
              alert("E-mail/Password estão incorretos")
            } 
        }
}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.containerLink}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp')
          }}
        >
          <Text style={styles.linkText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword')
          }}
        >
          <Text style={styles.linkText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30
  },
  logo: {
    alignSelf: 'center'
  },
  title: {
    alignSelf: 'center',
    marginBottom: '20%'
  },
  input: {
    backgroundColor: 'rgba(189, 189, 189, 0.35)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    paddingLeft: 15
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
      height: 4
    }
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 16
  },
  containerLink: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkText: {
    paddingHorizontal: 2,
    color: '#FFFFFF',
    fontSize: 16
  }
})