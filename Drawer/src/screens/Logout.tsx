import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Logout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Logout
      </Text>
      <input type="text" placeholder='Email que deseja deletar' style={styles.input1}/>
      <textarea cols="30" rows="10" placeholder='Mensagem explicando porque você deseja deletar sua conta' style={styles.input2}></textarea>
      <button style={styles.button}>Deletar</button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e4d5",
        justifyContent: 'center'
    },
    title: {
      color: '#703e3b',
      alignSelf: 'center',
      fontSize: 30,
      fontWeight:'bold'
    },
    input1:{
      alignSelf:'center',
      width:250,
      height:30,
      borderRadius:5,
      borderWidth:0,
      margin:3,
      fontSize:17,
      paddingLeft:7,
      color:'#703e3b'
    },
    input2:{
      alignSelf:'center',
      width:450,
      height:100,
      borderRadius:5,
      borderWidth:0,
      margin:3,
      fontSize:15,
      paddingLeft:7,
      color:'#703e3b',
      textAlign:'center',
      fontFamily:'Arial'
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
      cursor:'pointer'
    }

}) 