import React, { useRef, useState } from "react"
import { SafeAreaView, TouchableOpacity } from "react-native"
import {
  Container,
  Links,
  LinkText,
  InputControl,
  Input,
  Text,
  Button,
  ButtonText,
  Social
} from "../styled/LoginScreen"

import LoginHeader from "../components/LoginHeader"

//assets
import EyeIcon from "../assets/images/eye_ico.svg"
import EyeIconDisabled from "../assets/images/eye_ico-disabled.svg"
import FacebookIco from "../assets/images/facebook_ico.svg"
import GoogleIco from "../assets/images/google_ico.svg"

export default function Login({ navigation }) {
  const [password, setNoPassword] = useState(true)

  const handleChangePasswordInput = () => {
    setNoPassword(!password)
  }
  return (
    <SafeAreaView>
      <LoginHeader />
      <Container>
        <Links>
          <TouchableOpacity>
            <LinkText active onPress={() => navigation.navigate("Login")}>
              Iniciar Sesión
            </LinkText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <LinkText>Registrarse</LinkText>
          </TouchableOpacity>
        </Links>

        <InputControl>
          <Input placeholder="Correo Electronico" />
        </InputControl>

        <InputControl>
          <Input
            placeholder="Contraseña"
            secureTextEntry={password ? true : false}
          />
          <TouchableOpacity onPress={handleChangePasswordInput}>
            {password ? (
              <EyeIcon width={30} height={30} />
            ) : (
              <EyeIconDisabled width={30} height={30} />
            )}
          </TouchableOpacity>
        </InputControl>
        <TouchableOpacity>
          <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <Button>
          <ButtonText>Iniciar Sesion</ButtonText>
        </Button>

        <Text>Puedes iniciar sesión con: </Text>
        <Social>
          <FacebookIco width={50} height={50} />
          <GoogleIco width={50} height={50} />
        </Social>
      </Container>
    </SafeAreaView>
  )
}
