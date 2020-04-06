import React from "react";
import data from "./../data/categories.json";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

const events = data.events;

export default class Cards1 extends React.Component {
  render() {
    return (
      <View style={{ height: "50%" }}>
        <FlatList
          horizontal={true}
          data={events}
          renderItem={({ item }) => (
            <View style={style.list}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "10%",
                }}
              >
                <Text style={style.text}>{item.title}</Text>
                <Button
                  icon="chevron-right-circle"
                  color="black"
                  style={{ alignSelf: "flex-end" }}
                ></Button>
              </View>
              <Image
                source={{ uri: `${item.image}` }}
                style={{ width: 300, height: "60%" }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "yellow",
                  alignSelf: "flex-end",
                  alignItems: "center",
                  width: 100,
                  margin: 5,
                  elevation: 4,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text>Book</Text>
              </TouchableOpacity>
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
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});
