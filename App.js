import React from 'react';
import {SafeAreaView, StatusBar, Text } from 'react-native';
import feed from './assets/data/feed.js';

import { HomeScreen } from './src/screens/Home';
import { Post } from './src/components/Post';

const post1 = feed[0];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />  
      <Post post={post1} />
    </SafeAreaView>
  );
};

export default App;
