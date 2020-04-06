import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import My_drawer from "./drawer/drawer";
import T1 from "./componants/t1";

export default function App() {
  return (
    <NavigationContainer>
      <My_drawer/>
      
        </NavigationContainer>
  );
}
