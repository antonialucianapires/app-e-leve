import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Picker, ScrollView } from 'react-native';

export default function Discounts({ navigation }) {
  const [state, setState] = useState('todas');
  const [datas, setDatas ] = useState([
    {
    id: 0,
    label: 'Todas',
    value: 'todas',
  },
  {
    id: 1,
    label: 'Alimentação',
    value: 'alimentacao',
  },
  {
    id: 2,
    label: 'Educação',
    value: 'educacao',
  },
  {
    id: 3,
    label: 'Diversão',
    value: 'diversao',
  },
  {
    id: 4,
    label: 'Saúde',
    value: 'saude',
  },
  {
    id: 5,
    label: 'Serviços',
    value: 'servicos',
  },
  {
    id: 6,
    label: 'Vestuário',
    value: 'vestuario',
  },
])
  const [parceiros, setParceiros] = useState([
  {
    id: 1,
    nome: 'Padaria e Confeitaria Nosso lar',
    discounts: 'Até 30% OFF',
    categoria: 'alimentacao',
  }, 
  {
    id: 2,
    nome: 'xTudos',
    discounts: 'Até 30% OFF',
    categoria: 'educacao',
  },
  {
    id: 3,
    nome: 'É só um filminho',
    discounts: 'Até 30% OFF',
    categoria: 'diversao',
    },
  {
    id: 4,
    nome: 'Clinica Virose',
    discounts: 'Até 30% OFF',
    categoria: 'saude',
  },
  {
    id: 5,
    nome: 'Gato Net',
    discounts: 'Até 30% OFF',
    categoria: 'servicos',
  },
  {
    id: 6,
    nome: 'Joãozinho Multimarcas',
    discounts: 'Até 30% OFF',
    categoria: "vestuario",
  },

]); 

let teste = [];

if (state == 'todas') {
  teste = [...parceiros];
} else{
  teste = parceiros.filter(parceiro => (parceiro.categoria == state))
}
 
  return (
    
    <ScrollView style={styles.container}>
      
      <Text style={styles.labelPicker}>Selecione a categoria:</Text>
      <View style={styles.containerPicker}> 
       <Picker
              selectedValue={state}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setState(itemValue)}>
              {datas.map((data) => (
              <Picker.Item key={data.id}label={data.label} value={data.value} /> 
              ))}
            </Picker>
            </View>
            {teste.map(parceiro => 
          <View key ={parceiro.id} style={styles.containerDiscounts}>
            <View style={styles.containerText}>
        <Text style={styles.partner}>{parceiro.nome}</Text>
        <Text style={styles.discount}>{parceiro.discounts}</Text>
        </View> 
        <TouchableOpacity onPress={() => navigation.navigate('useDiscounts')} style={styles.button}>
        <Text style={styles.buttonText}>OBTER</Text>
        </TouchableOpacity>
      </View>
            )}
    </ScrollView>
  );
}

Discounts.navigationOptions = {
  title: 'EXPLORE OS DESCONTOS',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '5%',
  },
  labelPicker:{
    color: '#757575',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 3,
  },
  containerPicker: {
    marginBottom: 10,
    height: 35,
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    paddingLeft: 2,
    justifyContent: 'center',
  },
  picker: {
    height: 20,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#B2DFDB',
    color: '#009688',
  },
  containerDiscounts:{
    borderBottomWidth: 1,
    borderBottomColor: '#757575',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
  },
  containerText:{
    maxWidth: '50%',
  },
  partner: {
    color: '#009688',
    fontSize: 16,
    fontWeight: 'bold',
  },
  discount: {
    color: '#757575',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
  }
});