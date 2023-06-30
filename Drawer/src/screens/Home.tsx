import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home
      </Text>
      <Text style={styles.parag}>
        Faça seu login no nosso app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#703e3b",
        justifyContent: 'center',
    },
    title: {
      color: '#d3c8b4',
      alignSelf: 'center',
      fontSize: 30,
      fontWeight:'bold'
    },
    parag:{
      alignSelf:'center',
      color:'#d3c8b4',
      fontSize:20
    }

}) 