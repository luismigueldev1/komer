import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//screens
import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import HomeScreen from "../screens/HomeScreen"

const AuthStack = createStackNavigator()
const RootStack = createStackNavigator()
const isAuth = true

const App = () => {
  if (!isAuth) {
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
