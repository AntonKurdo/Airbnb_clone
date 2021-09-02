import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import searchResults from "../../../assets/data/search.js";
import { useNavigation } from "@react-navigation/native";
import { SuggestionRow } from "./SuggestionRow";

export const DestinationSearchScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ height: "100%" }}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            navigate("Guests");
            console.log(details);
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: "AIzaSyABIg2fsyA17153Kpt1kBTmVPb7da0iiH8",
            language: "en",
            types: "(cities)",
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};
