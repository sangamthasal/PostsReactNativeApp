import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const outlineheart= 'heart-outline';
const filledheart= 'cards-heart'

const DetailPost = (props) => {

    console.log(props.route.params.liked)

    const likefun = props.route.params.liked;
    console.log(likefun.clickonHeart)
  
   const{id,title,body,reactions,tags,heart,liked,reactionchanged} = {...props.route.params}
  return (
    <View key={id} style={styles.Detailpart}>
       
       <View style={styles.detailCard}>     
            <View style={styles.postTitle}>
                <Text>{title}</Text>
            </View>
            <View style={styles.postBody}>
                <ScrollView>
                
                    <Text style={styles.bodyText}>{body}</Text>
                
                </ScrollView>
            </View>
            <View style={styles.infopart}>
                <View style={styles.reaction}>
                <TouchableOpacity style={styles.LikeButton}>
                    
                    <Icon name={heart?outlineheart:filledheart} size={25} 

                        

                    /> 
            
                </TouchableOpacity>
                    <Text style={styles.reactiontext}>{reactions}</Text>
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
        backgroundColor:'red',
        justifyContent:'center'
    },
    LikeButton:{ 
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
   
})

export default DetailPost;
