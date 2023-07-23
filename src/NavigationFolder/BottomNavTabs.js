import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavTabs from './StackNavTabs';
import CreatePost_screen from '../AppScreens/CreatePostScreen/CreatePost_screen';
import MyPosts_screen from '../AppScreens/MyPostsScreen/MyPosts_screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BottomTabs = createBottomTabNavigator();

const BottomNavTabs = () => {
  return (

      <BottomTabs.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <BottomTabs.Screen name='HomeStack' component={StackNavTabs} options={{ tabBarIcon:({ color, size })=>(
                <MaterialCommunityIcons name="home" color={color} size={size} />
          )}}/>
          <BottomTabs.Screen name='Create' component={CreatePost_screen} options={{ tabBarIcon:({ color, size })=>(
                <MaterialCommunityIcons name="plus" color={color} size={size} />
          )}}/>
          <BottomTabs.Screen name='MyPost' component={MyPosts_screen} options={{tabBarIcon:({ color, size })=>(
                <MaterialCommunityIcons name="account" color={color} size={size} />
          )}}/>
      </BottomTabs.Navigator>
   
  );
}

export default BottomNavTabs;