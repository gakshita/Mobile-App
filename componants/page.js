import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class Page extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          elevation: 5,
          margin: 5,
        }}
      >
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            fontSize: 20,
          }}
        >
          Most Popular Resturants
        </Text>
        <FlatList
          style={{ height: 155 }}
          horizontal={true}
          data={this.props.item}
          renderItem={({ item }) => (
            <View style={style.list}>
              <Image
                source={{ uri: `${item.image}` }}
                style={{ width: 150, height: "100%" }}
              />

              <Text style={{ fontSize: 20, marginTop: 10, color: "black" }}>
                {item.title}
              </Text>
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
    backgroundColor: "brown",
    height: "60%",
    margin: 20,
    elevation: 5,
  },
});
