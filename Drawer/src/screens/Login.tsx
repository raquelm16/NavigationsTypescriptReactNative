import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>
      <input type="text" placeholder='Digite seu email' style={styles.input}/>
      <input type="text" placeholder='Digite sua senha' style={styles.input}/>
      <button style={styles.button}>Entrar</button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c84648",
        justifyContent: 'center'
    },
    title: {
      color: '#fff3db',
      alignSelf: 'center',
      fontSize: 30,
      fontWeight:'bold',
      marginBottom:10
    },
    input:{
      alignSelf:'center',
      width:250,
      height:30,
      borderRadius:5,
      borderWidth:0,
      margin:3,
      fontSize:17,
      paddingLeft:7,
      color:'#703e3b',
    },
    button:{
      alignSelf:'center',
      width:150,
      height:35,
      fontSize:17,
      borderRadius:5,
      borderWidth:0,
      fontWeight:'bold',
      backgroundColor:' #703e3b',
      color:'#fff3db',
      marginTop:15,
      cursor:'pointer',
    },
    

}) 