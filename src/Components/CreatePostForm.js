import React, { useState,useContext } from 'react';
import { View, Text, TextInput, StyleSheet,Button } from 'react-native';
import ContextProvider from '../Context/Contextprovider';



const CreatePostForm = () => {

const {Addpost} = useContext(ContextProvider);

const [posttitle,setposttitle]=useState(null);
const [postbody,setpostbody]=useState(null);



const setTitleDetails=(e)=>{
    setposttitle(e)
}

const setBodyDetails=(e)=>{
    setpostbody(e)
}



const getposts=()=>{
    console.log(postDetails);
}


const clearTitle=()=>{
    setposttitle(null)
}

const clearBody=()=>{
    setpostbody(null)
}


  return (
    <View style={styles.createpostform}>
            <View><Text style={{textAlign:'center',fontSize:20}}>Create Post</Text></View>
            <View style={[styles.titleinput,styles.allinputfileds]}>
                <Text style={styles.texts}>Title :</Text>
                <TextInput autoFocus multiline maxLength={50} placeholder='Type title' value={posttitle} onChangeText={setTitleDetails} style={styles.InputField}/>
                <Text style={styles.removecontent} onPress={clearTitle}>clear</Text>
            </View>
            <View style={[styles.bodyinput ,styles.allinputfileds]}>
                <Text style={styles.texts}>Body :</Text>
                <TextInput multiline maxLength={1250} placeholder='Type content' value={postbody} onChangeText={setBodyDetails} style={styles.InputField}/>
               <Text style={styles.removecontent} onPress={clearBody}>clear</Text>
            </View>

         
            
            <View style={styles.buttonpart}>
               
            
                <View>
                    <Button  title='Submit' onPress={()=>{Addpost(posttitle,postbody),setposttitle(null),setpostbody(null)}}/>
                </View>

               

                

            </View>
    </View>
  );
}

const styles =StyleSheet.create({
    createpostform:{
      
        width:'90%',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        rowGap:20
    },
    allinputfileds:{
      
      
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    titleinput:{
        height:'20%',
    
       
    },
    bodyinput:{
        height:'40%',
      
       
    },
    texts:{
        borderBottomWidth:0.2,
        textAlign:'center',
        paddingTop:2
    },
    removecontent:{
        fontSize:10,
        color:'#e81010',
        position:'absolute',
        right:'2%',
        bottom:'2%'
    },
    buttonpart:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
  
   

  
})

export default CreatePostForm;
