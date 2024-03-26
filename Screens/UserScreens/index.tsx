import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CounterScreen from "./CounterScreen";
import TestCurdScreen from "./TestCurdScreen";

const Stack = createStackNavigator<any>();

const UserScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
      <Stack.Screen name="TestCurdScreen" component={TestCurdScreen} />
    </Stack.Navigator>
  );
};

export default UserScreens;
