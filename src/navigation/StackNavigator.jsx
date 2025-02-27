import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Register from "../screens/Register";
import Login from "../screens/Login";
import ProductScreen from "../screens/ProdcutScreen";
import ProfileDetail from "../screens/ProfileDetail";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="ProductDetails" component={ProductScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail}/>
    </Stack.Navigator>
  );
}
