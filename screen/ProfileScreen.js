import React, {useState, useEffect, useContext} from "react";
import {View, Text,Image , StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import FormButton from "../asset/components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";


import PostCard from '../asset/components/PostCard';
import settings from "./settings";

const ProfileScreen =({navigation, route}) => {
    const {user, logout} = useContext(AuthContext);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);
    const [userData, setUserData] = useState(null);
  
    const fetchPosts = async () => {
      try {
        const list = [];
  
        await firestore()
          .collection('posts')
          .where('userId', '==',route.params ? route.params.userId : user.uid)
          .orderBy('postTime', 'desc')
          .get()
          .then((querySnapshot) => {
            // console.log('Total Posts: ', querySnapshot.size);
  
            querySnapshot.forEach((doc) => {
              const {
                userId,
                post,
                postImg,
                postTime,
                likes,
                comments,
              } = doc.data();
              list.push({
                id: doc.id,
                userId,
                userName: 'Test Name',
                userImg:
                  'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                postTime: postTime,
                post,
                postImg,
                liked: false,
                likes,
                comments,
              });
            });
          });
  
        setPosts(list);
  
        if (loading) {
          setLoading(false);
        }
  
        console.log('Posts: ', posts);
      } catch (e) {
        console.log(e);
      }
    };
  
    const getUser = async() => {
      await firestore()
      .collection('users')
      .doc( route.params ? route.params.userId : user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }
  
    useEffect(() => {
      getUser();
      fetchPosts();
      navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

    const handleDelete = () => {};

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {route.params ? ( <>
             <View>
                 
             </View>
             </>

             ) : (
                 <>
            
            <TouchableOpacity onPress={() => { navigation.navigate(settings);}}>
          <Image source={require('../asset/Icon/menu.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 40,
                                height: 40,
                                marginLeft: 360,
                                marginTop: 10
                            }}
                            />
          </TouchableOpacity>
              </>
             )}
          
          
            <ScrollView
            style={styles.container}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}
            >
              
            <Image
                style={styles.userImg}
                source={{uri: userData
                  ? userData.userImg ||
                    'https://firebasestorage.googleapis.com/v0/b/studentassistant-702c0.appspot.com/o/user.png?alt=media&token=b025c0fe-2481-4798-9577-3b8e689ff0e5'
                  : 'https://firebasestorage.googleapis.com/v0/b/studentassistant-702c0.appspot.com/o/user.png?alt=media&token=b025c0fe-2481-4798-9577-3b8e689ff0e5',}}
            />
            <Text style={styles.userName}>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</Text>
            
            <Text style={styles.aboutUser}>
            {userData ? userData.index || 'No Index added.' : ''}{"\n"}
              {userData ? userData.about || 'No details added.' : ''}
              </Text>

            <View style={styles.userBtnWrapper}>

             {route.params ? ( <>
             <View>
                 
             </View>
             </>

             ) : (
                 <>
            
              <TouchableOpacity style={styles.userBtn} onPress={() => { navigation.navigate('EditProfile');
              }}>
                <Text style={styles.userBtnTxt}>Edit</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Log Out</Text>
              </TouchableOpacity>
              </>
             )}

              </View>
                    <View style={styles.userInfoWrapper}>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>{posts.length}</Text>
                    <Text style={styles.userInfoSubTitle}>Messages</Text>
                </View>
                {/* <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>10</Text>
                    <Text style={styles.userInfoSubTitle}>Pins</Text>
                </View> */}
                </View>

                {posts.map((item) => (
                 <PostCard key={item.id} item={item} onDelete={handleDelete} />
                 ))}
                 

            </ScrollView>
            <Text></Text>
                 <Text></Text>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    userBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    userBtn: {
      borderColor: '#2e64e5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: '#2e64e5',
    },
    userInfoWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginVertical: 20,
    },
    userInfoItem: {
      justifyContent: 'center',
    },
    userInfoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
  });