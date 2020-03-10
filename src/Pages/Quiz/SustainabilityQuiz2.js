import React, {useEffect, useState} from 'react';
import { View,Image, Text, TouchableOpacity, StyleSheet,  ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios'


function quiz2({navigation}) {
    const [data, setData] = useState({ quiz3: [] });
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://my-json-server.typicode.com/arthurfig/server_json/db',
        );
        setData(result.data);
      };
      fetchData();
    }, []);

    var 
    [answerA,setAnswerA] = useState(Boolean),
    [answerB,setAnswerB] = useState(Boolean),
    [answerC,setAnswerC] = useState(Boolean),
    [answerD,setAnswerD] = useState(Boolean)

     return (
        <View style={styles.container}>
            <Text style={styles.question}>{data.quiz3.map(item => (item.question))}</Text>            
            <CheckBox
                title={data.quiz3.map(item => (item.options[0]))}
                containerStyle={styles.checkBox}
                textStyle={styles.textCheckBox}
                checkedColor='#FFFFFF'
                uncheckedColor='#FFFFFF'
                checked={answerA.checked}
                onPress={() => {setAnswerA({checked: !answerA.checked}),setAnswerB({unchecked: !answerB.unchecked}),setAnswerC({unchecked: !answerC.unchecked}),setAnswerD({unchecked: !answerD.unchecked})}}  

            />
            <CheckBox
                title={data.quiz3.map(item => (item.options[1]))}
                containerStyle={styles.checkBox}
                textStyle={styles.textCheckBox}
                checkedColor='#FFFFFF'
                uncheckedColor='#FFFFFF'
                checked={answerB.checked}
                onPress={() => {setAnswerA({unchecked: !answerA.unchecked}),setAnswerB({checked: !answerB.checked}),setAnswerC({unchecked: !answerC.unchecked}),setAnswerD({unchecked: !answerD.unchecked})}}  
        
            />
            <CheckBox
                title={data.quiz3.map(item => (item.options[2]))}
                containerStyle={styles.checkBox}
                textStyle={styles.textCheckBox}
                checkedColor='#FFFFFF'
                uncheckedColor='#FFFFFF'
                checked={answerC.checked}
                onPress={() => {setAnswerA({unchecked: !answerA.unchecked}),setAnswerB({unchecked: !answerB.unchecked}),setAnswerC({checked: !answerC.checked}),setAnswerD({unchecked: !answerD.unchecked})}}  
 
            />
            <CheckBox
                title={data.quiz3.map(item => (item.options[3]))}
                containerStyle={styles.checkBox}
                textStyle={styles.textCheckBox}
                checkedColor='#FFFFFF'
                uncheckedColor='#FFFFFF'
                checked={answerD.checked}
                onPress={() => {setAnswerA({unchecked: !answerA.unchecked}),setAnswerB({unchecked: !answerB.unchecked}),setAnswerC({unchecked: !answerC.unchecked}),setAnswerD({checked: !answerD.checked})}}  

            />
                    <TouchableOpacity onPress={() => {navigation.navigate('Main')}} style={styles.button}>
        <Text style={styles.buttonText}>Finalizar Teste</Text>
    </TouchableOpacity>
            <Image 
                source={require( '../../img/logo.png')}
                style={styles.logo}/>
        </View>
    )
};

quiz2.navigationOptions = {
    title: 'Sustentabilidade',
    headerStyle: {
        backgroundColor: '#009688',
    },
    headerTitleStyle: {
        color: '#FFFFFF',
    },

    headerTintColor: '#FFFFFF',
  };

  const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#009688',
        paddingHorizontal: '5%',
        justifyContent: 'center'
    },
    question:{
        fontSize: 23,
        color: '#FFFFFF',
        marginVertical: 10,
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
    checkBox: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'rgba(189, 189, 189, 0.35)',
        borderColor: 'rgba(189, 189, 189, 0.35)',
        borderRadius: 10,
        marginVertical: 10,
    },
    textCheckBox: {
        fontSize: 23,
        color: '#FFFFFF',
        fontWeight: 'normal',
    },
    logo: {
        alignSelf: 'center',
        marginTop: '10%'
      },
});

export default quiz2;
