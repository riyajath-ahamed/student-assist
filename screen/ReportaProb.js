import React, {useState, useContext} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView, Image } from "react-native";







const ReportaProb = () => {


return (
    <View>
        <Text></Text>
        <Text style={styles1.header}>Contact Us</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles1.fleo}> Supervisor 			    - 	Mr. Shashika Bandara</Text>
        <Text style={styles1.slow}>D/BIT/20/0021	RR Ahamed          – 	Software Engineering lead</Text>
        <Text style={styles1.aele}>Email: 37-it-0021@kdu.ac.lk</Text>
        <Text></Text>
        <Text style={styles1.slow}>D/BIT/20/0029 	WGAR Binithra    – 	Project Manager</Text>
        <Text style={styles1.aele}>Email: 37-it-0029@kdu.ac.lk</Text>
        <Text></Text>
        <Text style={styles1.slow}>D/BIT/20/0045	SKD Senevirathne – 	Quality Engineering lead</Text>
        <Text style={styles1.aele}>Email: 37-it-0045@kdu.ac.lk</Text>
        <Text></Text>
        <Text style={styles1.slow}> D/BIS/20/0021 	PVL Perera        – 	Business Analyst
</Text>
<Text style={styles1.aele}>Email: 37-is-0021@kdu.ac.lk</Text>
        <Text></Text>

    </View>
 
    
);
};

export default ReportaProb;

const styles1 = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#7f5DF0",
        marginLeft: 15,
        textAlign: "center",
    },
    fleo: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 15,
    },
    slow: {
        fontSize: 15,
        margin: 15,
    },
    aele: {
        fontSize: 10,
        color:"grey",
        marginLeft: 15,

    },
 


})
