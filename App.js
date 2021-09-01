import React from 'react';
import {SafeAreaView, StatusBar, Text } from 'react-native';
import { Post } from './src/components/Post';

import { HomeScreen } from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />  
      <Post />
    </SafeAreaView>
  );
};

export default App;
