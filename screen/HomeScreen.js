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