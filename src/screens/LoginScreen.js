import React from "react"
import {
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard
} from "react-native"
import { Container, Links, LinkText, Text, Social } from "../styled/LoginScreen"
import LoginHeader from "../components/LoginHeader"
import LoginForm from "../components/LoginForm"

//assets
import FacebookIco from "../assets/images/facebook_ico.svg"
import GoogleIco from "../assets/images/google_ico.svg"

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <LoginHeader />
          <Container>
            <Links>
              <TouchableOpacity>
                <LinkText active>Iniciar Sesión</LinkText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <LinkText>Registrarse</LinkText>
              </TouchableOpacity>
            </Links>
            <LoginForm />
            <Text>Puedes iniciar sesión con: </Text>
            <Social>
              <FacebookIco width={50} height={50} />
              <GoogleIco width={50} height={50} />
            </Social>
          </Container>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
