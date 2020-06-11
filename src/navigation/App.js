import "react-native-gesture-handler"
import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import useUserIsAuth from "../hooks/useUserIsAuth"

//screens
import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import HomeScreen from "../screens/HomeScreen"
import { Spinner } from "../styled/PopularList"
import { View } from "react-native"

const AuthStack = createStackNavigator()
const RootStack = createStackNavigator()

const App = () => {
  const { user, loading } = useUserIsAuth()

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
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
