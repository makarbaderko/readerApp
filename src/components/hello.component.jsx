import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const hello = ({ name }) => {
    return (
      <Text style={style.hello}>Hello, {name}</Text>
    );
  }
const style = StyleSheet.create({
    hello: {
        fontFamily: 'sans-serif',
        fontSize: 30
    }
})
export default hello;
  
  