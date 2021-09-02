import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// SCREENS
import { HomeScreen } from "../screens/Home";
import ExploreNavigator from "./ExploreNavigator";
import { SearchResultScreen } from "../screens/SearchResults";

const Tab = createMaterialTopTabNavigator();

export const SearchResultsTabNav = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: "#f15454",
      indicatorStyle: {
        backgroundColor: "#f15454"
      }
    }}>
      <Tab.Screen name='List' component={SearchResultScreen} />
      <Tab.Screen name='Map' component={SearchResultScreen} />   
    </Tab.Navigator>
  );
};
