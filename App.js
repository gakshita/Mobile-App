import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import My_drawer from "./drawer/drawer";
import T1 from "./componants/t1";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="drawer">
        <Stack.Screen name="events" component={T1} />
        <Stack.Screen
          name="drawer"
          component={My_drawer}
          options={{
            title: "M Y  H O M E",
            headerTintColor: "black",
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
