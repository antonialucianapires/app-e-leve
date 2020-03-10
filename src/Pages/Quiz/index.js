import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';


function IndexQuiz({navigation}) {
    return (
    <View style={styles.container}>
        <Image
        source={require( '../../img/rocket.png')}>
        </Image>
        <Text style={styles.title} >Hora de jogar!</Text>
        <Text style={styles.subtitle}>Além de ganhar pontos, você se torna um colaborador de outro nível ao adquirir conhecimento com o nosso quiz!</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('QuizRules')}} style={styles.ButtonStart}>
            <Text style={styles.textButtonStart}>Começar agora</Text>
         </TouchableOpacity >
        <TouchableOpacity onPress={() => {}} style={styles.ButtonReportError}>
            <Text style={styles.textButtonReportError}>Reportar erro</Text>
        </TouchableOpacity>
    </View>
    );
};

IndexQuiz.navigationOptions = {
    title: 'Quiz',
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  "center",
        justifyContent: 'center',
        padding: '5%',
        backgroundColor: '#FFFFFF'
    },
    title: {
        marginTop: 30,
        color: '#212121',
        fontSize: 23,
    },
    subtitle: {
        marginTop: 10,
        color: '#757575',
        fontSize: 16,
        textAlign: 'center'
    },
    ButtonStart: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        width: '90%',
        height: 33,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonStart: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    ButtonReportError: {
        marginTop: 10,
        width: '90%',
        height: 33,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    textButtonReportError: {
        color: '#4CAF50',
        fontSize: 16,
    },
});

export default IndexQuiz;