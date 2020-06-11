import "react-native-gesture-handler"
import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import useUserIsAuth from "../hooks/useUserIsAuth"

//screens
import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import CartScreen from "../screens/CartScreen"
import { Spinner } from "../styled/PopularList"
import { View } from "react-native"

const AuthStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const App = () => {
  const { user, loading, error } = useUserIsAuth()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spinner size="large" color="#7e0000" />
      </View>
    )
  }

  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Signup" component={SignupScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator headerMode="none" drawerPosition="right">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Carrito" component={CartScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
