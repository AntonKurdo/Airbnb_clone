import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { HomeScreen } from "../screens/Home";
import { SearchResultsTabNav } from "./SearchResultsTabNav";

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Search"}
        component={SearchResultsTabNav}
        options={{
          title: "Search Results",
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
