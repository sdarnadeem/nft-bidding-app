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
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import DrawerProfile from "./components/DrawerProfile";
import AboutUs from "./screens/AboutUs";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerProfile />
      <DrawerItemList {...props} />
      <DrawerItem
        label="My NFTs"
        icon={({ size, color }) => (
          <AntDesign name="picture" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Profile"
        icon={({ size, color }) => (
          <AntDesign name="profile" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="About Us"
        icon={({ size, color }) => (
          <AntDesign name="infocirlceo" size={size} color={color} />
        )}
        onPress={() => {
          props.navigation.navigate("AboutUs");
        }}
      />
      <DrawerItem
        label="Contact Us"
        icon={({ size, color }) => (
          <FontAwesome name="support" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Settings"
        icon={({ size, color }) => (
          <AntDesign name="setting" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Logout"
        icon={({ size, color }) => (
          <AntDesign name="logout" size={size} color={color} />
        )}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
        <Stack.Screen name="Details" component={Details} />

        <Stack.Screen name="SignupContinue" component={SignupContinue} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
