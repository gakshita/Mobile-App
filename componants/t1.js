import React from "react";
import { View, Text } from "react-native";
import Cards from "./cards";
import Cards1 from "./cards1";

export default function T1() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          padding: 10,
          width: "100%",
          height: 45,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Categories</Text>
      </View>
      <Cards />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
          Today's Events
        </Text>
      </View>
      <Cards1 />
    </View>
  );
}
