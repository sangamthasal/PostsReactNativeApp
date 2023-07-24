import React,{useContext} from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
import ContextProvider from '../../Context/Contextprovider';


const MyPosts_screen=()=>{
  
const{postDetails} = useContext(ContextProvider)

    return (
      
      <View style={styles.MypostScreen}>
          <View><Text style={{fontSize:20}}>Personal Posts</Text></View>
          <ScrollView>
          
            {
                postDetails.length>0 ? 
                  (
                    postDetails.map((post,index)=>(
                      <View key={index} style={styles.postContainer}>
                       <View style={styles.titlepart}>
                          <Text>Title :</Text>
                          <Text>{post.title}</Text>
                       </View>
                        <View style={styles.bodypart}>
                        <Text>Body :</Text>
                        <Text>{post.body}</Text>
                        </View>
                     </View>
                 
                  ))
                ):<Text>No post available</Text>
            }
        
          </ScrollView>
        </View>
     
    );
  }


const styles = StyleSheet.create({

  MypostScreen:{
    backgroundColor:'skyblue',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    paddingTop:'10%',
  
  },
  postContainer:{
   
    marginTop:'2%',
    display:'flex',
    justifyContent:'space-between',
    rowGap:10,
    backgroundColor:'white',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  titlepart:{
    borderBottomWidth:0.4,
    padding:'5%'
  },
  bodypart:{
    borderBottomWidth:0.4,
    padding:'5%'
  }
})

export default MyPosts_screen;
