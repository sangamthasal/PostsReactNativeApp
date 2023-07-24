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
import ContextState from './src/Context/ContextState';



function App(){

  return (
    
  <NavigationContainer>
    <ContextState>
      <StatusBar backgroundColor="black" />
     
      <BottomNavTabs/>
    </ContextState>
  </NavigationContainer>
 
  );
}



export default App;
