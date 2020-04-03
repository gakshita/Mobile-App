import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];
export default function C2() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white"
      }}
    >
      <Text>c2</Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => (
          <View style={style.list}>
            <Text style={{ fontSize: 30, color: "white" }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      ></FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  list: {
    backgroundColor: "red",
    width: "50%",
    padding: 30,
    margin: 20
  }
});
