import React, {useState, useContext} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView, Image } from "react-native";










const aboutus = () => {


return (
    <View>
        <Text></Text>
        <Image source={require('../asset/img/3.png')}  
            style={{
              height: 150,
              width: 150,
                alignSelf: "center",
              
            }}/>
            <Text style={{textAlign:"center", color:"#7f5DF0", fontSize: 20, fontWeight: "bold",}}>Student Assist</Text>
            <Text style={{textAlign:"center", color:"#808080", fontSize: 13, }}>V 1.0</Text>
        <Text> </Text>
        <Text style={{ marginLeft:15, marginRight: 15, textAlign: "justify"}}>The Student Assist application is created as a second-year group 
            project of General Sir John Kotelawala Defence University, Faculty of 
            Computing, Department of Information Technology INTAKE 37 students. The 
            creators of this application hope to assist the students in a university. 
            The university students can inform about club information, availability of 
            campus resources, send posts, get to know about each time table.
        </Text>
        <Text></Text>
        <Text style={{ marginLeft:15, marginRight: 15, textAlign: "justify"}}>For now, this application is developed only for department of information
             technology and hope to develop all the departments. when a student wants to
              know about the campus they can visit to the about university site and view it. 
              the application is user friendly application and hope the users will enjoy while 
              using this application.
        </Text>

    </View>
 
    
);
};

export default aboutus;

const styles1 = StyleSheet.create({
 
    glep: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        textAlign: "justify",
    },


})
