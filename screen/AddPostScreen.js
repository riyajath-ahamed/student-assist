import React, {useState}from "react";
import {View,Text, StyleSheet, Button, Image, Alert, ActivityIndicator} from "react-native";
import { InputField, InputWrapper, AddImage, SubmitBtn, SubmitBtnText, StatusWrapper } from "../styles/AddPost";
import ActionButton from 'react-native-action-button';
import storage from '@react-native-firebase/storage';


import ImagePicker from 'react-native-image-crop-picker';




const AddPostScreen = () => { 

    const [image,setImage] = useState(null);
    const [uploading,setUploading] = useState(false);
    const [transferred,setTransferred] = useState(0);



    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      }; 


      const submitPost  = async() =>{
          const uploadUri = image;
          let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

         // Add timestamp to File Name
        const extension = filename.split('.').pop(); 
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
 

          setUploading(true);
          setTransferred(0);

          const task = storage().ref(filename).putFile(uploadUri); 

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

          try{
              await task;

              setUploading(false);
              Alert.alert(
                'Image uploaded!',
                'Your image has been uploaded to the Firebase Cloud Storage Successfully!',

              );
            
          } catch(e){
              console.log(e);
          }
          setImage(null);

      }

return (
<View style={styles.container}>
    <InputWrapper>
    {image != null ? <AddImage source={{uri:image}}/> : null}
    <InputField
    placeholder="What's Gonna Pass!"
    multiline
    numberofLines={4}
    
    />

    {uploading ? (
        <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#7F3DFF" />
          </StatusWrapper>
        ) : (



    <SubmitBtn onPress={submitPost}>
        <SubmitBtnText>Post</SubmitBtnText>
    </SubmitBtn>
    )}


    </InputWrapper>
    <ActionButton buttonColor="#7F3DFF" offsetY={90}>
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={takePhotoFromCamera}>
          <Image
              source={require("/Programming/Student/screen/Icons/Fill5.png")}
              resizeMode="contain"
              style={{
                width: 30,
                width: 30,
                
              }}
              />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={choosePhotoFromLibrary}>
          <Image
              source={require("/Programming/Student/screen/Icons/Fill4.png")}
              resizeMode="contain"
              style={{
                width: 30,
                width: 30,
                
              }}
              />
          </ActionButton.Item>
          
        </ActionButton>
</View>
);
};

export default AddPostScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        fontSize: 20,
        height: 22,
        color: 'white',
        
    },
    
});