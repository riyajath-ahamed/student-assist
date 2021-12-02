import React, {useState, useContext} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView, Image } from "react-native";
import { windowHeight, windowWidth } from "../asset/utils/Dimentions";






const aboutCampus = () => {


    
return (
    <ScrollView>
    <View>
            <Image
            source={require('../asset/img/100.jpg')}
            style={styles1.logo}
              />
        <Text></Text>
        <Text style={styles1.glep}>General Sir John Kotelawala Defence University (KDU) was 
            initially established as the “General Sir John Kotelawala Defence Academy” by 
            the Parliamentary Act No 68 of 1981 and subsequently 
            it was elevated to University status by the amendment Act No 27 of 1988, 
            thereby empowering it to award Bachelors’ and Postgraduate degrees in 
            Defence Studies.</Text>
            <Text></Text>

        <Text style={styles1.glep}>KDU is a member of the Association of Commonwealth Universities (United Kingdom) 
            and maintains necessary standards for educating and grooming Officer Cadets to meet 
            the challenges of modern defence management.</Text>
            <Text></Text>
            <Text style={styles1.glep}>
            KDU is now open for civil students who wish to continue their higher studies in the 
            fields of Engineering, Law, Management, Social Sciences and IT.
            </Text>
            <Text></Text>
            <Text style={styles1.glep}>
            Officers with exceptional performance in reputed universities/institutions can 
            pursue postgraduate studies in accordance with the requirements of the Service 
            to which they belong. Civil professionals are also offered a place at postgraduate 
            studies to excel in and study a post graduate degree in their related field of expertise.
            </Text>
            <Image
            source={require('../asset/img/101.jpg')}
            style={styles1.logo}
              />
            <Text></Text>
            <Text style={styles1.header}>VISION</Text>
            <Text></Text>
            <Text style={styles1.glep}>
            To be a university nationally and internationally known for its unique ability to engage
             both undergraduate and graduate students in distinctive and interdisciplinary defence
             related higher education that best serves the tri-services, the state sector and society at large.
            </Text>
            <Text></Text>
            <Text style={styles1.header}>MISSION</Text>
            <Text></Text>
            <Text style={styles1.glep}>
            To ensure a high-quality, learner-centered educational experience through undergraduate, graduate, 
            and professional programmes along with high quality research across many disciplines in the field 
            of defence, in both residential and non-residential settings in the campus
            </Text>
            <Text></Text>
            <Text style={styles1.header}>OBJECTIVES</Text>
            <Text></Text>
            <Text style={styles1.glep}>To provide facilities for and instruction in academic studies to Officer Cadets in 
                preparation for the first degree in such subjects that are relevant to their professional employment.
            </Text>
            <Text></Text>
            <Text style={styles1.glep}>To provide facilities to introduce Officer Cadets to the Profession of Arms and guide 
                them to develop their knowledge and skills in the Profession of Arms, prior to a Commission 
                in the Armed Forces is conferred on them.
            </Text>
            <Text></Text>
            <Text style={styles1.glep}>To foster a spirit of comradeship amongst Officer Cadets to develop “jointness” and a
                 sense of national unity amongst the officer corps of the Army, Navy and Air Force so 
                 that joint operations are facilitated in the course of their service.
            </Text>
            <Text></Text>
            <Text style={styles1.glep}>To provide courses of study to Officers of the Armed Forces and others selected by the 
                Board of Management to qualify for post-graduate degrees and other qualifications to be 
                awarded by the University in subjects relevant to the Profession of Arms.
            </Text>
            <Text></Text>
            <Text style={styles1.glep}>To discharge such other functions including Research and Development as the University 
                may consider necessary for the achievement of its objectives.
            </Text>
            <Image
            source={require('../asset/img/103.jpg')}
            style={styles1.logo}
              />
            <Text></Text>
            <Text style={styles1.header}>FACULTIES</Text>
            <Text></Text>
            <Text style={styles1.glep}>Defence Studies and Strategic Studies</Text>
            <Text style={styles1.glep}>Engineering</Text>
            <Text style={styles1.glep}>Graduate Studies</Text>
            <Text style={styles1.glep}>Law</Text>
            <Text style={styles1.glep}>Management, Social Sciences and Humanities</Text>
            <Text style={styles1.glep}>Medicine</Text>
            <Text style={styles1.glep}>Research and Development</Text>
            <Text style={styles1.glep}>Allied Health Sciences</Text>
            <Text style={styles1.glep}>Computing</Text>
            <Text style={styles1.glep}>Built Environment and Spatial Sciences</Text>
            <Text style={styles1.glep}>Faculty of Technology</Text>
            <Text></Text>
            
            <Image
            source={require('../asset/img/104.jpg')}
            style={styles1.logo}
              />
              <Text></Text>
            <Text></Text>

            

                

    </View>
    </ScrollView>
 
    
);
};

export default aboutCampus;

const styles1 = StyleSheet.create({
 
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color:"#7f5DF0",
        marginLeft: 15,
    },
    glep: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        textAlign: "justify",
    },
    logo: {
        width: windowWidth - 500,
        height: windowHeight - 500,
        margin:10,
        borderColor: '#7f5DF0',
        borderRadius:15,
        shadowOpacity:0.75,
        shadowColor: '#7f5DF0',
        shadowOffset: {width: 0, height: 10},
    },
    slepo: {
        fontSize: 20,
        fontWeight: "bold",
        color:"#7f5DF0",
        textAlign:"right",
        marginRight: 15, 
    },
    glep2: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        textAlign: "justify",
    },




})
