import React, { useState } from "react"
import LoginHeader from "../components/LoginHeader"
import {
  Container,
  Links,
  LinkText,
  InputControl,
  Input,
  Button,
  ButtonText,
  Terms,
  TextTerm
} from "../styled/LoginScreen"
import { SafeAreaView, TouchableOpacity } from "react-native"
import CheckBox from "@react-native-community/checkbox"

//assets
import EyeIcon from "../assets/images/eye_ico.svg"
import EyeIconDisabled from "../assets/images/eye_ico-disabled.svg"

export default function Signup({ navigation }) {
  const [password, setNoPassword] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleChangePasswordInput = () => {
    setNoPassword(!password)
  }

  const handleCheckBox = () => {
    toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
  }
  return (
    <SafeAreaView>
      <LoginHeader />
      <Container>
        <Links>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinkText>Iniciar Sesión</LinkText>
          </TouchableOpacity>
          <LinkText active>Registrarse</LinkText>
        </Links>

        <InputControl>
          <Input placeholder="Nombre " />
        </InputControl>
        <InputControl>
          <Input placeholder="Correo electronico" />
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
        <Terms>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={handleCheckBox}
            tintColors={{ true: "#7e0000" }}
            boxType="circle"
          />
          <TextTerm>Acepto los terminos y condiciones</TextTerm>
        </Terms>
        <Button>
          <ButtonText>Registrarse</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  )
}
