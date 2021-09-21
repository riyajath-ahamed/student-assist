import React, {useContext} from "react";
import {View, Text, StyleSheet } from 'react-native';

import{Container} from '/Programming/Student/styles/FeedStyles'

import { AuthContext } from "../navigation/AuthProvider";

const HomeScreen =() => {
    const {user, logout}= useContext(AuthContext);

    return(
        <Container>
            <Text styles={styles.text}> Welcome </Text>
        </Container>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
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