import "react-native-gesture-handler"
import React, { useState, useEffect } from "react"
import auth from "@react-native-firebase/auth"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//screens
import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import HomeScreen from "../screens/HomeScreen"
import { Spinner } from "../styled/PopularList"

const AuthStack = createStackNavigator()
const RootStack = createStackNavigator()

const App = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const watchAuthState = user => {
    setUser(user)
    setLoading(false)
  }
  console.log(user)
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(watchAuthState)
    return subscriber
  }, [])

  if (loading) {
    return <Spinner size="large" color="#7e0000" />
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
