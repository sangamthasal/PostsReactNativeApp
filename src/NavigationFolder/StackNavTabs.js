import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home_screen from '../AppScreens/HomeScreen/Home_screen';
import DetailPost from '../AppScreens/DetailPostScreen/DetailPost';

const Stack = createStackNavigator();

const StackNavTabs = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
       
    >
            <Stack.Screen
                name='Home'
                component={Home_screen}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name='Detail'
                component={DetailPost}
            
            />
    </Stack.Navigator>
  );
}

export default StackNavTabs;
