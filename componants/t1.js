import React from "react";
import { View, Text } from "react-native";
import Cards from "./cards";
import Cards1 from "./cards1";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export default function T1(props) {
  console.log(props.navigation , "this is  props")
  return (
    <ScrollView>
    <View
      style={{
        flex: 1,
      }}
    >
      
      <Button onPress={()=>props.navigation.navigate('T2')} title="click to t2"/>
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
    </ScrollView>
  );
}
