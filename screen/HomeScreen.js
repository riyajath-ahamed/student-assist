import React, {useContext, useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';

//import{Card, Container} from '/Programming/Student/styles/FeedStyles'


import { AuthContext } from "../navigation/AuthProvider";

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import PostCard from "../asset/components/PostCard";
import {Container} from "../styles/FeedStyles";

// const Posts = [
//     {
//         id: '1',
//         userName: 'Kavindu Dilshan',
//         userImg: require('../asset/user/user1.jpeg'),
//         postTime: '1 mins ago',
//         post:
//           'Hey there, The general meeting is happening now in Audiroium !!!',
//         postImg: require('../asset/Post/post1.jpg'),
//         liked: true,
//         likes: '14',
//         comments: '5', 
//     },
//     {
//         id: '2',
//         userName: 'Kalana Perera',
//         userImg: require('../asset/user/user2.jpeg'),
//         postTime: '5 mins ago',
//         post:
//           'Hey there, The general meeting is happening now in Audiroium !!!',
//         postImg: require('../asset/Post/post1.jpg'),
//         liked: false,
//         likes: '31',
//         comments: '15', 
//     },
//     {
//         id: '4',
//         userName: 'Riyajath Ahamed',
//         userImg: require('../asset/user/user4.jpeg'),
//         postTime: '45 mins ago',
//         post:
//           'Hey there welcom to the new assistant app "Student Assist!!!"',
//         postImg: 'none',
//         liked: false,
//         likes: '5',
//         comments: '0', 
//     },
//     {
//         id: '5',
//         userName: 'Hithaisha Perera',
//         userImg: require('../asset/user/user5.jpeg'),
//         postTime: '55 mins ago',
//         post:
//           'HoD Meeting at HQ-3 for IT/IS 37',
//         postImg: 'none',
//         liked: false,
//         likes: '5',
//         comments: '0', 
//     },

// ]

const HomeScreen =({navigation}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  
  const fetchPosts = async() =>{
    try{

      const list = [];

      await firestore()
      .collection('posts')
      .orderBy('postTime', 'desc')
      .get()
      .then((querySnapshot) => {
        //console.log('Total Posts: ', querySnapshot.size);

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
        })
      })

      setPosts(list);

    if (loading) {
      setLoading(false);
    }

      console.log('Posts: ', posts);

    } catch(e) {
      console.log(e);
    }

  }


  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
    setDeleted(false);
  }, [deleted]);



  const handleDelete = (postId) => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postId),
        },
      ],
      {cancelable: false},
    );
  };



    const deletePost = (postId) => {
      console.log('Current Post Id: ', postId);
  
      firestore()
        .collection('posts')
        .doc(postId)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            const {postImg} = documentSnapshot.data();
  
            if (postImg != null) {
              const storageRef = storage().refFromURL(postImg);
              const imageRef = storage().ref(storageRef.fullPath);
  
              imageRef
                .delete()
                .then(() => {
                  console.log(`${postImg} has been deleted successfully.`);
                  deleteFirestoreData(postId);
                  setDeleted(true);
                })
                .catch((e) => {
                  console.log('Error while deleting the image. ', e);
                });
              // for only text
            } else {
              deleteFirestoreData(postId);
            }
          }
        });
    };
  
    const deleteFirestoreData = (postId) => {
      firestore()
        .collection('posts')
        .doc(postId)
        .delete()
        .then(() => {
          Alert.alert(
            'Post deleted!',
            'Your post has been deleted successfully!',
          );
          setDeleted(true);
        })
        .catch((e) => console.log('Error deleting textt post.', e));
    };



    return(
        <Container>
            <FlatList 
            data={posts}
            renderItem={({item}) => <PostCard item={item} onDelete={handleDelete} onPress={() =>
              navigation.navigate('HomeProfile', {userId: item.userId})
             }/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            />
            
        </Container>
    );
}

export default HomeScreen;
