import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function useDiscounts({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.containerPartner}>
        <Text style={styles.partnerName}>Padaria e Confeitaria Nosso Lar</Text>
        <Text style={styles.partnerInfo}>CNPJ: 2009.876.654</Text>
        <Text style={styles.partnerInfo}>Rua Ali Perto, 677, Gebara, Itaboraí</Text>
      </View>
      <View style={styles.containerDiscounts}>
      <View>
        <Text style={styles.product}>Pães doces com morango</Text>
        <Text style={styles.price}>Preço: R$ 0,70</Text>
        <Text style={styles.priceBold}>Preço com e-Leve: R$ 0,60</Text>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('DiscountsValidation')}} style={styles.button}>
        <Text style={styles.buttonText}>USAR DESCONTO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDiscounts}>
      <View>
        <Text style={styles.product}>Pães doces com morango</Text>
        <Text style={styles.price}>Preço: R$ 0,70</Text>
        <Text style={styles.priceBold}>Preço com e-Leve: R$ 0,60</Text>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('DiscountsValidation')}} style={styles.button}>
        <Text style={styles.buttonText}>USAR DESCONTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

useDiscounts.navigationOptions = {
  title: 'DESCONTOS',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '5%',
  },
  containerPartner: {
    backgroundColor: '#B2DFDB',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  partnerName: {
    color: '#009688',
    fontSize: 16,
    fontWeight: 'bold',
  },
  partnerInfo: {
    color: '#009688',
    fontSize: 16,
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
  product: {
    color: '#757575',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#757575',
    fontSize: 12,
  },
  priceBold: {
    color: '#009688',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '32%',
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