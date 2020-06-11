import React, { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import {
  InputControl,
  Input,
  Button,
  EmulatedButton,
  ButtonText,
  Terms,
  TextTerm,
  TextError
} from "../styled/LoginScreen"
import { Spinner } from "../styled/PopularList"
import CheckBox from "@react-native-community/checkbox"
import auth from "@react-native-firebase/auth"
import { Formik } from "formik"
import { signupSchema } from "../utils/yup"
import Toast from "../components/Toast"

//assets
import EyeIcon from "../assets/images/eye_ico.svg"
import EyeIconDisabled from "../assets/images/eye_ico-disabled.svg"

export default function SignupForm() {
  //firebase
  const [loading, setLoading] = useState(false)
  //password
  const [password, setNoPassword] = useState(true)

  const handleChangePasswordInput = () => {
    setNoPassword(!password)
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        check: false
      }}
      validationSchema={signupSchema}
      onSubmit={(values, actions) => {
        setLoading(true)
        auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then(response => {
            Toast("Usuario registrado con exito.")
            actions.resetForm()
            setLoading(false)
            return response.user.updateProfile({
              displayName: values.name
            })
          })
          .catch(error => {
            setLoading(false)
            if (error.code === "auth/email-already-in-use") {
              Toast("Este email ya esta siendo usado.")
            }

            if (error.code === "auth/invalid-email") {
              Toast("Email incorrecto.")
            }
            if (error.code === "auth/weak-password") {
              Toast("La contraseña debe tener al menos 6 caracteres")
            }
            if (error.code === "auth/network-request-failed") {
              Toast("Ocurrio un error en la red")
            }
          })
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        setFieldValue,
        errors,
        touched
      }) => (
        <View>
          <InputControl>
            <Input
              placeholder="Nombre "
              onChangeText={handleChange("name")}
              value={values.name}
              onBlur={handleBlur("name")}
            />
          </InputControl>
          {touched.name && errors.name ? (
            <TextError>{errors.name}</TextError>
          ) : null}

          <InputControl>
            <Input
              placeholder="Correo electronico"
              onChangeText={handleChange("email")}
              value={values.email}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
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
              onBlur={handleBlur("password")}
              value={values.password}
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

          <Terms>
            <CheckBox
              disabled={false}
              value={values.check}
              onValueChange={() => setFieldValue("check", !values.check)}
              onBlur={handleBlur("check")}
              tintColors={{ true: "#7e0000" }}
            />
            <TextTerm onPress={() => setFieldValue("check", !values.check)}>
              Acepto los terminos y condiciones
            </TextTerm>
          </Terms>
          {touched.check && errors.check ? (
            <TextError>{errors.check}</TextError>
          ) : null}
          <TextError>{}</TextError>
          {loading ? (
            <EmulatedButton>
              <Spinner size="large" color="#FFDD00" />
            </EmulatedButton>
          ) : (
            <Button onPress={handleSubmit}>
              <ButtonText>Registrarse</ButtonText>
            </Button>
          )}
        </View>
      )}
    </Formik>
  )
}
