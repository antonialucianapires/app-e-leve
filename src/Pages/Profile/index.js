import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view}></View>
      <Image source={require('../../img/Elipse.png')}style={styles.logo} />
      <Text style={styles.username}>Dados pessoais</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('UpdateProfile')}} style={styles.button}> 
        <Text style={styles.profile}>Nome do usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('ChangePassword')}} style={styles.button}> 
        <Text style={styles.profile}>Alterar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}> 
        <Text style={styles.profile}>Lixos doados</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}> 
        <Text style={styles.profile}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}> 
        <Text style={styles.profile2}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
Profile.navigationOptions = {
  title: 'MEU PERFIL',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
    position:"absolute",
    backgroundColor:"#009688",
    width: "100%",
    height: '20%',
    top: 0,
  },
  logo:{
    alignSelf:"center",
  },
  username:{
    marginTop: 10,
    fontSize:20,
    alignItems:"center",
    color:"#009688",
    fontWeight:"bold",
    textAlign:"center",
  },
  button:{
    marginTop:10,
    width: "87%",
    padding: 10,
    backgroundColor: '#B2DFDB',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    marginBottom: 10,
    shadowOffset: {
    width: 4,
    height: 4,
  }},  
  profile: {
    color: "#009688",
    alignItems: "center",
    fontSize: 20,      
  },
  profile2:{
    fontSize: 25,
    color: "#009688",
    marginTop: 15,
  },
});
