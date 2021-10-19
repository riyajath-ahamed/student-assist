import React, {useEffect, useContext, useState}from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Alert, ImageBackground, Image } from "react-native";

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import FormButton from "../asset/components/FormButton";
import ImagePicker from 'react-native-image-crop-picker';

import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import KeyboardAvoidingWrapper from "../asset/components/KeyboardAvoidingWrapper";

const EditProfileScreen = () => {
    const {user, logout} = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        const currentUser = await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }

      const handleUpdate = async() => {
        let imgUrl = await uploadImage();
    
        if( imgUrl == null && userData.userImg ) {
          imgUrl = userData.userImg;
        }
    
        firestore()
        .collection('users')
        .doc(user.uid)
        .update({
          fname: userData.fname,
          lname: userData.lname,
          about: userData.about,
          index: userData.index,

          phone: userData.phone,
          
          Department: userData.Department,
          Intake: userData.Intake,
          userImg: imgUrl,
        })
        .then(() => {
          console.log('User Updated!');
          Alert.alert(
            'Profile Updated!',
            'Your profile has been updated successfully.'
          );
        })
      }

      const uploadImage = async () => {
        if( image == null ) {
          return null;
        }
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
        // Add timestamp to File Name
        const extension = filename.split('.').pop(); 
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
    
        setUploading(true);
        setTransferred(0);
    
        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);
    
        // Set transferred state
        task.on('state_changed', (taskSnapshot) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
    
          setTransferred(
            Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
              100,
          );
        });
    
        try {
          await task;
    
          const url = await storageRef.getDownloadURL();
    
          setUploading(false);
          setImage(null);
    
          Alert.alert(
            'Image uploaded!',
            'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
          );
          return url;
    
        } catch (e) {
          console.log(e);
          return null;
        }
    
      };
    
      useEffect(() => {
        getUser();
      }, []);

      const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 300,
          cropping: true,
          compressImageQuality: 0.7,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
          bs.current.snapTo(1);
        });
      };
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          compressImageQuality: 0.7,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
          bs.current.snapTo(1);
        });
      };
    
      const renderInner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    
      const renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
    
      const bs = React.createRef();
      const fall = new Animated.Value(1);




    return(
      
      <KeyboardAvoidingWrapper>
        <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, -5]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      'https://drive.google.com/file/d/1Y3vOoSyb_j4g7jRUuxNQd8kSr4AutJbq/view?usp=sharing'
                    : 'https://drive.google.com/file/d/1Y3vOoSyb_j4g7jRUuxNQd8kSr4AutJbq/view?usp=sharing',
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                 <Image source={require('../asset/Icon/cam.png')}
                   resizeMode="contain"
                   style={{
                   width: 40,
                  height: 40,
                   }}
                 />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {userData ? userData.fname : ''} {userData ? userData.lname : ''}
          </Text>
          <Text>{user.uid}</Text>
          <Text>{user.accounttyp}</Text>
        </View>

        <View style={styles.action}>
        <Image source={require('../asset/Icon/person.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.fname : ''}
            onChangeText={(txt) => setUserData({...userData, fname: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Image source={require('../asset/Icon/person.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            value={userData ? userData.lname : ''}
            onChangeText={(txt) => setUserData({...userData, lname: txt})}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Image source={require('../asset/Icon/abtme.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            value={userData ? userData.about : ''}
            onChangeText={(txt) => setUserData({...userData, about: txt})}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        <View style={styles.action}>
        <Image source={require('../asset/Icon/index.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            placeholder="Index No"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.index : ''}
            onChangeText={(txt) => setUserData({...userData, index: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Image source={require('../asset/Icon/phone.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={userData ? userData.phone : ''}
            onChangeText={(txt) => setUserData({...userData, phone: txt})}
            style={styles.textInput}
          />
        </View>


        <View style={styles.action}>
        <Image source={require('../asset/Icon/department.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            placeholder="Department"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, Department: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Image source={require('../asset/Icon/intake.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
              }}
              />
          <TextInput
            placeholder="Intake"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.Intake : ''}
            onChangeText={(txt) => setUserData({...userData, Intake: txt})}
            style={styles.textInput}
          />
        </View>
        <FormButton buttonTitle="Update" onPress={handleUpdate} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Animated.View>
    </View>
    </KeyboardAvoidingWrapper>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 10,
      width: '100%',
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 1,
      paddingTop: -80,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#2e64e5',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#333333',
    },
  });
  