import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const percentage = () => {
    return(
        <View>
            <Image style={styles.cover}source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bookmark_icon.svg/1200px-Bookmark_icon.svg"}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    div: {
        flex: 1, flexDirection: "row"
    }
})

export default percentage;