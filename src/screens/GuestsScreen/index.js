import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Adults</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
        </View>
        <View style={styles.controlsWrapper}>
          <Pressable style={styles.btn} onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
          </Pressable>
          <Text style={styles.count}>{adults}</Text>
          <Pressable style={styles.btn} onPress={() => setAdults(adults + 1)}>
            <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
      <View>
        <Text style={{ fontWeight: "bold" }}>Children</Text>
        <Text style={{ color: "#8d8d8d" }}>Ages 2 - 12</Text>
      </View>
      <View style={styles.controlsWrapper}>
        <Pressable style={styles.btn} onPress={() => setChildren(Math.max(0, children - 1))}>
          <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
        </Pressable>
        <Text style={styles.count}>{children}</Text>
        <Pressable style={styles.btn} onPress={() => setChildren(children + 1)}>
          <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
        </Pressable>
      </View>
    </View>
    <View style={styles.row}>
    <View>
      <Text style={{ fontWeight: "bold" }}>Infants</Text>
      <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
    </View>
    <View style={styles.controlsWrapper}>
      <Pressable style={styles.btn} onPress={() => setInfants(Math.max(0, infants - 1))}>
        <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
      </Pressable>
      <Text style={styles.count}>{infants}</Text>
      <Pressable style={styles.btn} onPress={() => setInfants(infants + 1)}>
        <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
      </Pressable>
    </View>
  </View>
      
    </View>
  );
};

