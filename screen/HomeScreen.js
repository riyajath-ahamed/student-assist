import React, {useContext} from "react";
import {View, Text, StyleSheet } from 'react-native';


import { AuthContext } from "../navigation/AuthProvider";

const HomeScreen =() => {
    const {user, logout}= useContext(AuthContext);

    return(
        <View style={Styles.container} > 
        <Text> Welcome{"\n"} {user.uid} </Text>
        </View>
    );
}

export default HomeScreen;

const Styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
    },
    text: {
        fontSize:20,
        color: '#333333',
        fontWeight: 'bold'
    }
})