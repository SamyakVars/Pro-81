import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
  } from 'react-native';



export default class Feed extends React.Component{
    render () {
        return (
            <View style={styles.container}>
                <Text> Feed</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
