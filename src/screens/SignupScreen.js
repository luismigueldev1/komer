import React from "react"
import LoginHeader from "../components/LoginHeader"
import SignupForm from "../components/SignupForm"
import auth from "@react-native-firebase/auth"
import { Container, Links, LinkText } from "../styled/LoginScreen"
import {
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard
} from "react-native"

export default function Signup({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <LoginHeader />
          <Container>
            <Links>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <LinkText>Iniciar Sesión</LinkText>
              </TouchableOpacity>
              <LinkText active>Registrarse</LinkText>
            </Links>
            <SignupForm />
          </Container>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
