import React, { useState } from 'react';
import { StyleSheet,
   Text, 
   View,
    TouchableOpacity, 
    TextInput,
    Image, 
    Clipboard,
    ToastAndroid,
    Modal,
    Alert,
    TouchableHighlight,
  } from 'react-native';
import { Linking } from 'expo';


export default function Collection({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const tel = '(21) 00000-0000'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localize o ponto de coleta mais próximo de você</Text>
      <View style={styles.containerPartner}>
        <View style={styles.row}>
        <Image source={require( '../../img/icon-partner.png')}
        style={styles.icon}/>
        <View>
          <Text style={styles.name}>PONTO DE COLETA 1</Text>
          <Text style={styles.address}>Endereço: Av. das Américas, 1.569</Text>
          <Text style={styles.district}>CENTRO</Text>
          </View>
          </View>

          <View style={styles.row}>
          <Modal
            presentationStyle="overFullScreen"
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}>
            <View style={styles.modal} >
              <View>
              <View style={styles.row}>
            <Image source={require( '../../img/icon-partner.png')}
            style={styles.icon}/>
            <View>
              <Text style={styles.name}>PONTO DE COLETA 1</Text>
              <Text style={styles.address}>Endereço: Av. das Américas, 1.569</Text>
              <Text style={styles.district}>CENTRO</Text>
              </View>
              </View>
              <View>
                <TouchableOpacity 
                onPress={() => Clipboard.setString(tel,
                ToastAndroid.show('Copiado para a área de transferência', 
                ToastAndroid.SHORT) )}
                  style={styles.buttonModal}>
                  <Text style={styles.buttonTextModal}>(21) 00000-0000</Text>
                </TouchableOpacity>
                </View>
                <TouchableHighlight
                  onPress={() => {setModalVisible(!modalVisible)}}>
                  <Text style={styles.buttonExitModal} >Sair</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.buttonContact}
            onPress={() => {
              setModalVisible(true);
            }}>
        <Text style={styles.buttonText}>Contato</Text>
      </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {Linking.openURL('https://maps.google.com/maps?q=-22.8365237%2C-42.9908059&z=17&hl=pt-BR')}} 
            style={styles.buttonMap}>
            <Text style={styles.buttonText}>Ver mapa</Text>
          </TouchableOpacity>
          </View>
          </View>
    </View>
  );
}

Collection.navigationOptions = {
  title: "PONTOS DE COLETAS",
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
    backgroundColor: '#FFFFFF',
  }, 
  title: {
    paddingHorizontal: '5%',
    fontSize: 23,
    backgroundColor: '#009688',
    color: '#E8E8E8',
    paddingBottom: 20,
  },
  containerPartner: {
    marginHorizontal: '5%',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.2,
    borderColor: '#757575',
    borderRadius: 10,
    marginTop: 10,
    padding: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    }},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    margin: 5,
  },
  name: {
    color: '#00796B',
    fontSize: 17,
  },
  address: {
    fontSize: 14,
    maxWidth: '80%'
  } , 
  district: {
    fontSize: 14,
  },
  buttonContact: {
    marginTop: 15,
    backgroundColor: '#009688',
    borderRadius: 10,
    width: '47%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    }},
  buttonMap: {
    marginTop: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    width: '47%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    }},
  buttonText: {
    color: '#FFFFFF',
    padding: 3,
    fontSize: 15,
    textAlign: 'center',

  },
  modal: {
    backgroundColor: '#FFFFFF',
    marginVertical: 220,
    width: '90%', 
    padding: 25, 
    borderWidth: 0.5,
    borderColor: '#757575',
    justifyContent: 'center', 
    borderRadius: 10, 
    alignItems: 'center', 
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    }},
    buttonModal: {
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      width: '95%',
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 10,
    },
    buttonTextModal: {
      color:  '#4CAF50',
      fontSize: 14,
    },
    buttonExitModal: {
      color: '#757575',
      alignSelf: 'center',
      fontSize: 15,
      marginTop: 5,
    }
});