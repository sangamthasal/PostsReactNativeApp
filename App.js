import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BottomNavTabs from './src/NavigationFolder/BottomNavTabs';
import { NavigationContainer } from '@react-navigation/native';



function App(){

  return (
  <NavigationContainer>
   
      <StatusBar backgroundColor="black" />
  
      <BottomNavTabs/>
      
  </NavigationContainer>
  );
}



export default App;
