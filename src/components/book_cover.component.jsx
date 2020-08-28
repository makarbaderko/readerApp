import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const cover = ({ image }) => {
  return (
    <View style={styles.div}>
      <Image
        source={{uri: image}}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 195,
  }, div: {
    marginTop: 50,
    marginLeft: '32%'
  }
});
export default cover;
