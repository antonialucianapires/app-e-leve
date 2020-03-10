import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

export default function DiscountsValidation({ navigation }) {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.containerDiscounts}>
      <View>
        <Text style={styles.product}>Pães doces com morango</Text>
        <Text style={styles.price}>Preço: R$ 0,70</Text>
        <Text style={styles.price}>Preço com e-Leve: R$ 0,60</Text>
        </View>
      </View>
      <Text style={styles.textBold}>Moedas utilizadas: 10</Text>
      <Text style ={styles.text}>Para liberar o desconto, solicite que o 
      parceiro digite o código no campo abaixo:</Text>
      
      <TextInput
              style={styles.input}
              placeholder="Digite a senha de liberação"
              placeholderTextColor= "#009688"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
            />
      <TouchableOpacity onPress={() => {navigation.navigate('Discounts')}} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar desconto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Discounts')}} style={styles.buttonRed}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

DiscountsValidation.navigationOptions = {
  title: "DESCONTO",
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
    paddingHorizontal: '5%',
    justifyContent: 'center'
  },
  containerDiscounts:{
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginBottom : '10%'
  },
  product: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  text:{
    fontSize:18,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  textBold:{
    fontSize:17,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#B2DFDB',
    height: 50,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    paddingLeft: 15,
  },
  button:{
    width: '100%',
    height: 33,
    justifyContent: 'center',
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
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },  
  buttonRed:{
    width: '100%',
    height: 33,
    justifyContent: 'center',
    backgroundColor: '#EE5B64',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
  }},  
});