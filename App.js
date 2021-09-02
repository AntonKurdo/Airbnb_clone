import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";

// SCREENS


// COMPONENTS
import { Post } from "./src/components/Post";
import Router from "./src/navigation/Router";

const App = () => {
  return <Router />;
};

export default App;
