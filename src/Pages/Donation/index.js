import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native';

export default function Donation({navigation}) {
  const [trash, setTrash] = useState("0");
  const [state, setState] = useState("0");
  const [point, setPoint] = useState("0");

  return (
    
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
          <View>
              <Text style = {styles.donation}>Registre sua doação</Text>
          </View>
          <View>
              <Text style = {styles.description}>Para garantir sua pontuação, preencha o formulário abaixo:</Text>
          </View>

          <View style={styles.containerPicker}>
            <Picker
              selectedValue={trash}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setTrash(itemValue)}>
                <Picker.Item label="Selecione o e-lixo" value="0" />
                <Picker.Item label="Aparelho de Som" value="1" />
                <Picker.Item label="Bateria" value="2" /> 
                <Picker.Item label="Cabos" value="3" /> 
                <Picker.Item label="Câmera Fotográfica" value="4" />
                <Picker.Item label="Carregador" value="5" /> 
                <Picker.Item label="Computador/Gabinete" value="6" /> 
                <Picker.Item label="Fogão" value="7" />
                <Picker.Item label="Impressora" value="8" /> 
                <Picker.Item label="Lâmpada Eletrônica" value="9" /> 
                <Picker.Item label="Micro-ondas" value="10" />
                <Picker.Item label="Monitor" value="11" /> 
                <Picker.Item label="Mouse" value="12" /> 
                <Picker.Item label="Notebook" value="13" />
                <Picker.Item label="Pilhas" value="14" /> 
                <Picker.Item label="Tablets" value="15" /> 
                <Picker.Item label="Teclado" value="16" /> 
                <Picker.Item label="Telefone" value="17" /> 
                <Picker.Item label="TV" value="18" /> 
              </Picker>
          </View>
          <View style={styles.containerPicker}>
            <Picker
              selectedValue={state}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setState(itemValue)}>
              <Picker.Item label="Selecione o estado" value="0" />
              <Picker.Item label="Funcionando" value="1" /> 
              <Picker.Item label="Não funciona" value="2" /> 
            </Picker>
          </View>
          <View style={styles.containerPicker}>
            <Picker
              selectedValue={point}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setPoint(itemValue)}>
              <Picker.Item label="Selecione o ponto de coleta" value="0" />
              <Picker.Item label="Ponto A" value="1" /> 
              <Picker.Item label="Ponto B" value="2" /> 
            </Picker>
          </View>
          <View>
              <Text style = {styles.description}>Para finalizar o registro, digite a senha validadora abaixo:</Text>
          </View>
                <TextInput
              style={styles.button}
              placeholder="Senha validadora"
              placeholderTextColor= "#009688"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
            />
          <TouchableOpacity onPress={() => {navigation.navigate('RegisteredDonation')}}  style={styles.Register}>
            <Text style={styles.buttonRegister}>Registrar doação</Text>
          </TouchableOpacity>
          
        </ScrollView>
    </KeyboardAvoidingView>

  );
}

Donation.navigationOptions = {
  title: "E-LIXO",
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    justifyContent: 'center'
  }, 
  donation: {
    fontSize: 23,
    color: '#212121',
    alignItems: 'center',
  },
  containerPicker: {
    marginTop: 10,
    height: 35,
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    paddingLeft: 5,
    justifyContent: 'center',
  },
  picker: {
    height: 20,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#B2DFDB',
    color: '#009688',
  },
  description:{
    fontSize: 16,
    color: '#757575',
    marginTop: 20,
  },
  button:{
    width:'100%',
    height: 35,
    fontSize: 16,
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
    color: '#009688',
    marginTop: 30,
  },
  buttonForm:{
    alignItems: 'center',
    color: '#009688',
    padding: 7,
    fontSize: 16,
  },
  Register:{
    width: '100%',
    height: 35,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: '39%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
  }},
  buttonRegister:{
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 16,
  },
  scrollView:{
    paddingHorizontal: '5%'
  },
});
