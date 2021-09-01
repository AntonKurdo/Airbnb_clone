import React from 'react';
import {SafeAreaView, StatusBar, Text } from 'react-native';
import feed from './assets/data/feed.js';

// SCREENS
import { HomeScreen } from './src/screens/Home';
import { SearchResultScreen } from './src/screens/SearchResults/index.js';
import { DestinationSearchScreen } from './src/screens/DestinationSearch/index.js';

// COMPONENTS
import { Post } from './src/components/Post';



const post1 = feed[0];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />  
      <DestinationSearchScreen />
    </SafeAreaView>
  );
};

export default App;
