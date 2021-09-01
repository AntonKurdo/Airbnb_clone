import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./styles";

export const HomeScreen = (props) => {
  return (
    <View>
      <Pressable style={styles.searchBtn} onPress={() => console.log("hoho1")}>
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchBtnText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>{"Go \nNear"}</Text>
        <Pressable style={styles.btn} onPress={() => console.log("hoho")}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
