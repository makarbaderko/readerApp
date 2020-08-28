import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const cover = ({ image }) => {
  return (
    <View style={styles.div}>
      <Image
        source={{
          uri: `https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg`,
        }}
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
