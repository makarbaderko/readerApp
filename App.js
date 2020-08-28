import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/components/hello.component";
import Book_cover from "./src/components/book_cover.component";
import book_cover_image from "./assets/book.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.hello}>
        <Hello name="Makar"></Hello>
      </View>
      <View>
        <Book_cover image={`https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg`} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
  container: {
    backgroundColor: "#F0E7E4",
  },
  hello: {
    marginTop: 150,
    marginLeft: 25,
  },
});
