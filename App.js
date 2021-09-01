import React from 'react';
import {SafeAreaView, StatusBar, Text } from 'react-native';

// SCREENS
import { HomeScreen } from './src/screens/Home';
import { SearchResultScreen } from './src/screens/SearchResults/index.js';
import { DestinationSearchScreen } from './src/screens/DestinationSearch/index.js';
import { GuestsScreen } from './src/screens/GuestsScreen/index.js';

// COMPONENTS
import { Post } from './src/components/Post';


const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />  
      <GuestsScreen />
    </SafeAreaView>
  );
};

export default App;
