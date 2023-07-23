import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const outlineheart= 'heart-outline';
const filledheart= 'cards-heart'

const PostCard = (props) => {




    const [heart,setheart]= useState(true);

    const {id,title,body,reactions,tags} = {...props.post}
    
    const [reaction,setreactoin]= useState(reactions)



    const clickonHeart=()=>{
        setheart(!heart) 
    }

    const changeReaction=()=>{

        heart?setreactoin(reaction-1):setreactoin(reaction+1)
    }


  return (
    <View key={id} style={[styles.PostCard ,styles.elevation]}>

        <View style={styles.titlepart} onTouchEnd={()=>props.navigation.navigate('Detail',{id:id,title:title,body:body,reactions:reaction,tags:tags,heart:heart,liked:clickonHeart,reactionchanged:changeReaction})}> 
            <Text>
                Title : 
            </Text>
            <Text style={styles.Posttitle}>
                {title} 
            </Text>

            <TouchableOpacity style={styles.readmore}>
                    <Text style={styles.readmoreText}>Read More</Text>
                    <Icon size={10} name='arrow-right-thin'/>
            </TouchableOpacity>
        </View>

            <View style={styles.Infopart}>

              <View style={styles.reactionPart}>
                    <TouchableOpacity style={styles.LikeButton}>
                    
                        <Icon name={heart?outlineheart:filledheart} size={25} 
                        onPressIn={()=>{
                            clickonHeart()
                            
                        }}
                        onPress={()=>{
                            changeReaction()
                        }}
                        /> 
                
                    </TouchableOpacity>

                    <Text>{reaction}</Text> 
              </View>
                 <View style={styles.tags}>
                    {
                        tags.map((tag)=>(<Text style={styles.tagstext} key={tag}>#{tag}</Text>))
                    }
                 </View>


            </View>
  </View>
  );
}

const styles = StyleSheet.create({

    PostCard: {
        flex:1,
        backgroundColor:'skyblue',
        padding:'5%',
        marginHorizontal:'5%',
        marginBottom:'10%',
        display:'flex',
        rowGap:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        position:'relative'
    },

    titlepart:{
        display:'flex',
        height:90,
        flexDirection:'row',
        borderBottomWidth:1,
        paddingBottom:10,
       
    },

    Posttitle:{
        flex:1,
    },

    reactionPart:{
        flex:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'flex-start'
    },

    LikeButton:{ 
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    Infopart:{

        display:'flex',
        flexDirection:'row',
    },

    tags:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end'
        
    },
    elevation:{
        elevation:16,
        shadowColor:'black'
    },
    readmore:{
        position:'absolute',
        right:0,
        bottom:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    readmoreText:{
        fontSize:8
    },
    tagstext:{
        fontSize:9
    }
})

export default PostCard;
