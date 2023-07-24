import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import CreatePostForm from '../../Components/CreatePostForm';

const CreatePost_screen=()=> {
 
    return (
      <View style={styles.createscreen}>
        <CreatePostForm/>
      </View>
    );
  }

const styles = StyleSheet.create({
    createscreen:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})


export default CreatePost_screen;
