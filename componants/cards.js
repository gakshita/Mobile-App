import React from "react";
import data from "./../data/categories.json";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
const categories = data.categories;
export default class Cards extends React.Component {
  render() {
    return (
      <View style={{ height: 100 }}>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={({ item }) => (
            <View style={style.list}>
              <Button icon={item.icon} color="black"></Button>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    );
  }
}

const style = StyleSheet.create({
  list: {
    margin: 10,
    elevation: 5,
    backgroundColor: "white",
    // height: "15%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
