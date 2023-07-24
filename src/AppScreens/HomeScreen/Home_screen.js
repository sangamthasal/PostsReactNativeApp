import React,{useState,useEffect} from 'react';
import { ScrollView, Text, TouchableOpacity, View,StyleSheet, TextInput } from 'react-native';
import PostCard from '../../Components/PostCard';



const Home_screen=({navigation})=>{

  const[Post,setPosts]=useState(null);
  const[isLoading,setLoading]=useState(true);
  const[inputText,setInputText]=useState('');

  const url = "https://dummyjson.com/posts?limit=20";
  const searchurl = `https://dummyjson.com/posts/search?q=${inputText}`;

  useEffect(() => {

    fetch(inputText?searchurl:url).
    then((res)=> res.json()).
    then((post)=> setPosts(post)).
    catch((err)=>console.log(err)).
    finally(()=>setLoading(false))
  
  },[inputText]);
  
    return (
      <View style={styles.homeScreen}>
        <View style={styles.logoandsearchpart}>
          <TouchableOpacity style={styles.AppLogo}>
            <View onTouchEnd={()=>navigation.navigate('Home')}>
              <Text style={{fontSize:20}}>My posts</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.inputpart}>
            <TextInput placeholder='Search' value={inputText} onChangeText={(e)=>setInputText(e)}/>
          </View>

        </View>
        <View style={styles.postlistspart}>
          <ScrollView>
          
            {
                isLoading ? <Text style={styles.loadintext}>Loading....</Text>: (
                    Post.posts.map((post)=>(

                        <PostCard key={post.id} post={post} navigation={navigation}/>
                 
                  ))
                )
            }
        
          </ScrollView>
        </View>
      </View>
    );
  
}

export default Home_screen;

const styles = StyleSheet.create({
  homeScreen:{
    paddingTop:8
  },
  AppLogo:{
    height:60,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  logoandsearchpart:{
    display:'flex',
    flexDirection:'row',
  },  
  postlistspart:{
    marginBottom:'20%',
    paddingTop:20
  },
  inputpart:{
  
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
  },
  loadintext:{
   
    textAlign:'center'
  }

})