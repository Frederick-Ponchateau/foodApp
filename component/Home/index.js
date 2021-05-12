import React from 'react';
 import 'react-native-gesture-handler';
 import { ScrollView ,StyleSheet} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import Header from './Header';
 import Menu from './Menu';
 import Foodlists from './FoodLists';
  
 import {
   View,
 } from 'react-native';
import { SafeAreaView } from 'react-native';
 
 const Home = () => {

   return (
     <SafeAreaView>
  

       

     
        <View>
          <ScrollView style={styles.ScrollView}>
            <Header/>
            <Menu/> 

            <Foodlists/> 
            
          </ScrollView>

        </View>

     </SafeAreaView>
   );
 };
const styles = StyleSheet.create({
  ScrollView:{
    backgroundColor:'#8aff05'
  }
})


 
 export default Home;