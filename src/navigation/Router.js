import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// SCREENS
import { HomeScreen } from "../screens/Home";
import { SearchResultScreen } from "../screens/SearchResults/index.js";
import { DestinationSearchScreen } from "../screens/DestinationSearch/index.js";
import { GuestsScreen } from "../screens/GuestsScreen/index.js";
import { HomeTabNavigator } from "./HomeTabNavigation";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}     
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
          }}
        />
        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
