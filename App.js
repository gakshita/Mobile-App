import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-paper";
import MyHome from "./componants/myhome";
import C1 from "./componants/c1";
import C2 from "./componants/c2";
import T1 from "./componants/t1";
import T2 from "./componants/t2";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="drawer"
          component={My_drawer}
          options={{
            title: "M Y H O M E",
            headerTintColor: "black",

            headerLeft: navigation => (
              <Button
                icon="format-list-bulleted"
                color="black"
                style={{ width: 1 }}
                onPress={() => navigation.openDrawer()}
              ></Button>
            ),
            headerStyle: {
              backgroundColor: "#fff"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function My_drawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={MyHome}
        options={{
          title: "H O M E",
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "#fff"
          }
        }}
      ></Drawer.Screen>
      <Drawer.Screen name="c1" component={C1} />
      <Drawer.Screen name="c2" component={C2} />
      <Drawer.Screen name="tabs" component={My_tabs} />
    </Drawer.Navigator>
  );
}

function My_tabs() {
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
