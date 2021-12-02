import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';


export const AuthContext = createContext();

export const AuthProvider=({children}) => {
    const [user, setUser] = useState(null);
    function comp(){
        if (email || password == ""){
          return Alert.alert('Enter your Email and Password')
        }
    
      };

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login:async(email, password) => {
                    try{
                        await auth().signInWithEmailAndPassword(email,password)
                        .catch(error => {
                            // Alert for the 
                            console.log('Something went wrong with added user to firestore: ', error);
                            Alert.alert('Enter A valid Email and password');
                        })
                        
                        
                    } catch(e){
                        alert("Email or Password is incorrect .");
                    }
                },
                register: async(email, password, account, fname, lname) => {
                    try{
                        await auth().createUserWithEmailAndPassword(email,password)
                        .then(() => {
                            //Once the user creation has happened successfully, we can add the currentUser into firestore
                            //with the appropriate details.
                            firestore().collection('users').doc(auth().currentUser.uid)
                            .set({
                                fname: fname,
                                lname: lname,
                                email: email,
                                accounttyp: "student",
                                createdAt: firestore.Timestamp.fromDate(new Date()),
                                userImg: null,
                            })
                            //ensure we catch any errors at this stage to advise us if something does go wrong
                            .catch(error => {
                                console.log('Something went wrong with added user to firestore: ', error);
                                Alert.alert('Something went wrong with added user to firestore:');
                            })
                          })
                          //we need to catch the whole sign up process if it fails too.
                          .catch(error => {
                              console.log('Something went wrong with sign up: ', error);
                              Alert.alert("Enter a Valid Email and Password! ");
                          })
                        
                    }catch(e){
                        alert("Enter a valid Email and Password.");
                    }
                },
                logout: async() => {
                try{
                    await auth().signOut();
                } catch(e){
                    console.log(e);
                }
                }


            }}
        >
            {children}
        </AuthContext.Provider>
    )
}