/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App: () => Node = () => {
 
  return (
     <NavigationContainer>
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View>
          
            <Text style={styles.highlight}>App.js</Text> <Icon name="rocket" size={30} color="#900"/>
            
          
        </View>
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
