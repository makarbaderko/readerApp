import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const book_details = ({
  book_name,
  author_name,
  date_published,
  publisher,
}) => {
  return (
    <View style={styles.div}>
      <Text style={styles.name}>{book_name}</Text>
      <Text style={styles.author}>by {author_name}</Text>
      <Text style={styles.publishing}>Published {date_published} by {publisher}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  div: {marginTop: 30, marginLeft: 15},
  name: { fontFamily: 'sans-serif', fontSize: 20},
  author: { fontFamily: 'sans-serif', fontSize: 12},
  publishing: { fontFamily: 'sans-serif', fontSize: 12},
});

export default book_details;
