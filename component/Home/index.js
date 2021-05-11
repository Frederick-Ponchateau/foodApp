import React from 'react';
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import Header from './Header';
 import Menu from './Menu';
 import Foodlists from './FoodLists';
 
 import {
   View,
 } from 'react-native';
 
 const Home = () => {

   return (
     <NavigationContainer>
  
        <View>
            
          <Header/>
          <Menu/> 
          <Foodlists/> 

         </View>

     </NavigationContainer>
   );
 };
 
 export default Home;