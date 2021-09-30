import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';


export const AuthContext = createContext();


export const AuthProvider=({children}) => {
    const [user, setUser] = useState(null);

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login:async(email, password) => {
                    try{
                        await auth().signInWithEmailAndPassword(email,password);
                    } catch(e){
                        alert("Email or Password is incorrect .");
                    }
                },
                register: async(email, password) => {
                    try{
                        await auth().createUserWithEmailAndPassword(email,password);
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