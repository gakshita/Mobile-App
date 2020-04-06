import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import T1 from "./../componants/t1";
import T2 from "./../componants/t2";

const Tab = createBottomTabNavigator();

export default function My_tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: { fontSize: 15, padding: 10 }
      }}
    >
      <Tab.Screen name="Tab1" component={T1}></Tab.Screen>
      <Tab.Screen name="Tab2" component={T2}></Tab.Screen>
    </Tab.Navigator>
  );
}
