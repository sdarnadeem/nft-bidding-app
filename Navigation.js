import React from "react";
import Home from "./screens/Home";
import Details from "./screens/Details";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Login from "./screens/Login";
import AuthLanding from "./screens/AuthLanding";
import Signup from "./screens/Signup";
import ForgotPassword from "./screens/ForgotPassword";
import SignupContinue from "./screens/SignupContinue";
import Favorites from "./screens/Favorites";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthLanding"
      >
        <Stack.Screen name="AuthLanding" component={AuthLanding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupContinue" component={SignupContinue} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
