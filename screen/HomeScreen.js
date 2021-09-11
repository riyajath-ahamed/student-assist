import React, {useContext} from "react";
import {View, Text, StyleSheet } from 'react-native';
import FormButton from "../asset/components/FormButton";

const HomeScreen =() => {
    return(
        <View style={Styles.container}> 
        <Text> Welcome </Text>
        <FormButton buttonTitle='Log Out' onPress={() => {}} />
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
        color: '#333333'
    }
})