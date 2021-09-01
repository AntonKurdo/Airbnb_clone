import React from 'react';
import {SafeAreaView, StatusBar, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />   
      <Icon name="rocket" size={30} color="#900" />  
      <Text> Airbnb app </Text>  
    </SafeAreaView>
  );
};



export default App;
