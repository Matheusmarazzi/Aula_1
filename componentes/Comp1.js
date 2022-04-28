import React from 'react';
import {
  StyleSheet,  
  View,
  Text,
  
} from 'react-native';
export default function(){
    return(
        <View>
            <Text style={estilos.txt1}>Titulo 1</Text>
            <Text style={estilos.txt2}>Titulo 2</Text>
        </View>
    );
}
const estilos = StyleSheet.create({
    txt1:{
        color: '#00f',
        fontSize:20,
    },
    txt2:{
        color: '#0f0',
        fontSize:40, 
    }
});