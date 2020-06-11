import React, { useState } from "react"
import { Formik } from "formik"
import { loginSchema } from "../utils/yup"

//assets
import EyeIcon from "../assets/images/eye_ico.svg"
import EyeIconDisabled from "../assets/images/eye_ico-disabled.svg"
import { View, TouchableOpacity } from "react-native"
import {
  InputControl,
  Input,
  Text,
  Button,
  ButtonText,
  TextError,
  EmulatedButton
} from "../styled/LoginScreen"
import { Spinner } from "../styled/PopularList"
import auth from "@react-native-firebase/auth"
import Toast from "./Toast"

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [password, setNoPassword] = useState(true)

  const handleChangePasswordInput = () => {
    setNoPassword(!password)
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        setLoading(true)
        auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(response => {
            actions.resetForm()
            setLoading(false)
            Toast(`Bienvenido ${response.user.displayName}`)
          })
          .catch(error => {
            setLoading(false)
            if (error.code == "auth/user-not-found") {
              Toast("Usuario Incorrecto")
            }
            if (error.code == "auth/wrong-password") {
              Toast("Contraseña incorrecta")
            }
            if (error.code == "auth/network-request-failed") {
              Toast("Ocurrio un error en la red")
            }
          })
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => (
        <View>
          <InputControl>
            <Input
              placeholder="Correo Electronico"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              value={values.email}
              onBlur={handleBlur("email")}
            />
          </InputControl>
          {touched.email && errors.email ? (
            <TextError>{errors.email}</TextError>
          ) : null}
          <InputControl>
            <Input
              placeholder="Contraseña"
              secureTextEntry={password ? true : false}
              onChangeText={handleChange("password")}
              value={values.password}
              onBlur={handleBlur("password")}
            />
            <TouchableOpacity onPress={handleChangePasswordInput}>
              {password ? (
                <EyeIcon width={30} height={30} />
              ) : (
                <EyeIconDisabled width={30} height={30} />
              )}
            </TouchableOpacity>
          </InputControl>
          {touched.password && errors.password ? (
            <TextError>{errors.password}</TextError>
          ) : null}
          <TouchableOpacity>
            <Text>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {loading ? (
            <EmulatedButton>
              <Spinner size="large" color="#FFDD00" />
            </EmulatedButton>
          ) : (
            <Button onPress={handleSubmit}>
              <ButtonText>Iniciar sesion</ButtonText>
            </Button>
          )}
        </View>
      )}
    </Formik>
  )
}
