import React from "react";
import { View, Text, FlatList, StyleSheet,Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window');

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
        style={{backgroundColor:"green" , width:"100%"}}
        renderItem={({ item }) => (
          <View style={style.list}>
            <View >
            <Text style={{ fontSize: 30, color: "white" }}>{item.title}</Text>
            </View>
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
    width:WIDTH-40,
    // width:"100%",
    // width: "50%",
    // width:"70%",
    padding: 30,
    height:300,
    margin: 20
  }
});
