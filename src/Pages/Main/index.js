import React, { useEffect, useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Picker,
  KeyboardAvoidingView
} from 'react-native'
import axios from 'axios'


function Main ({ navigation }) {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://06f6b9b1.ngrok.io/users')
      setData(result.data)
    }
    fetchData()
  }, [])

  const takemoney = `${data.map(item => item.moedas)}`
  let carteira = `R$${takemoney}`

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {data.map(item => item.nome)}</Text>
      <TouchableOpacity
        style={styles.containerWallet}
        onPress={() => {
          navigation.navigate('Rewards')
        }}
      >
        <View>
          <Text style={styles.textMoney}>{carteira},00</Text>
          <Text style={styles.textWallet}>carteira de pontos</Text>
        </View>
        <Image source={require('../../img/buttonPlus.png')}></Image>
      </TouchableOpacity>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonTrash}
                  onPress={() => {
            navigation.navigate('Donation')
          }}>
          <Image source={require('../../img/icon-e-lixo.png')}></Image>
          <Text style={styles.buttonText}>Lixo eletrônico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuiz}
          onPress={() => {
            navigation.navigate('IndexQuiz')
          }}
        >
          <Image source={require('../../img/icon-quiz.png')}></Image>
          <Text style={styles.buttonText}>Quiz</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleDiscount}>DESCONTOS POR CATEGORIA</Text>
      <View style={styles.containerDiscount}>
        <View>
          <TouchableOpacity style={styles.buttonDiscount}>
            <Text style={styles.textDiscount}>ALIMENTAÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiscount}>
            <Text style={styles.textDiscount}>DIVERSÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiscount}>
            <Text style={styles.textDiscount}>VESTUÁRIO</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonDiscount}>
            <Text style={styles.textDiscount}>EDUCAÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiscount}>
            <Text style={styles.textDiscount}>SAÚDE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDiscount}>
            <Text style={styles.textDiscount}>SERVIÇOS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

Main.navigationOptions = {
  title: null
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '100%'
  },
  containerPicker: {
    marginTop: 10,
    height: 33,
    width: '90%',
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  picker: {
    height: 20,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#B2DFDB',
    color: '#009688'
  },
  title: {
    width: '90%',
    fontSize: 23,
    color: '#212121',
    marginTop: 20
  },
  containerWallet: {
    width: '90%',
    height: 130,
    backgroundColor: 'rgba(189, 189, 189, 0.35)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    alignItems: 'center',
    marginTop: 5
  },
  textMoney: {
    fontSize: 25,
    color: '#00796B',
    fontWeight: 'bold'
  },
  textWallet: {
    fontSize: 16,
    color: '#757575'
  },
  containerButtons: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonTrash: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    width: '45%',
    height: 109,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonQuiz: {
    backgroundColor: '#009688',
    borderRadius: 10,
    width: '45%',
    height: 109,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 16
  },
  containerDiscount: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleDiscount: {
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20
  },
  buttonDiscount: {
    width: 150,
    height: 41.5,
    backgroundColor: 'rgba(189, 189, 189, 0.35)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7
  },
  textDiscount: {}
})

export default Main
