import React from 'react';
import {SafeAreaView, StatusBar, Text } from 'react-native';
import feed from './assets/data/feed.js';

// SCREENS
import { HomeScreen } from './src/screens/Home';
import { SearchResultScreen } from './src/screens/SearchResults/index.js';

// COMPONENTS
import { Post } from './src/components/Post';


const post1 = feed[0];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />  
      <SearchResultScreen />
    </SafeAreaView>
  );
};

export default App;
