import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const outlineheart= 'heart-outline';
const filledheart= 'cards-heart'

const DetailPost = (props) => {

   
   const{id,title,body,reactions,tags,heart} = {...props.route.params}
  return (
    <View key={id} style={styles.Detailpart}>
       
       <View style={styles.detailCard}>     
            <View style={styles.postTitle}>
                <Text>Title:</Text>
                <Text>{title}</Text>
            </View>
            <View style={styles.postBody}>
                <Text>Body:</Text>
                <ScrollView>
                
                    <Text style={styles.bodyText}>{body}</Text>
                
                </ScrollView>
            </View>
            <View style={styles.infopart}>
                <View style={styles.reaction}>
                <TouchableOpacity style={styles.LikeButton}>
                    
                    <Icon name={heart?outlineheart:filledheart} 
                        onPressIn={()=>{
                            props.navigation.setParams({heart: !heart})
                        }} 
                        onPress={()=>{
                            props.navigation.setParams(heart?{reactions:reactions-1}:{reactions:reactions+1})
                        }}
                    
                        size={25} 

                    /> 
            
                </TouchableOpacity>
                    <Text style={styles.reactiontext}>{reactions} likes</Text>
                </View>
                <View style={styles.tagspart}>
                    {
                        tags.map((tag)=>(
                            <Text style={styles.tagstext} key={tag}>#{tag}</Text>
                        ))
                    }
                </View>
            </View>
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
    Detailpart:{
        flex:1,
        backgroundColor:'skyblue',
        justifyContent:'center',
        alignItems:'center',
        
    },
    detailCard:{
        
        backgroundColor:'white',
        padding:'5%',
        width:'90%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomEndRadius:10,
        display:'flex',
        justifyContent:'space-between',
      
       
    },
    postTitle:{
        borderBottomWidth:0.3
    },
    postBody:{

        height:'60%',
        paddingHorizontal:'10%',
        borderBottomWidth:0.4,
    },
    reaction:{ 
        
        width:'13%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
       
        
    },
    tagspart:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%',
      
    },
    reactiontext:{
        width:80,
    }
})

export default DetailPost;
