import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

import searchResults from "../../../assets/data/search.js";

export const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};
