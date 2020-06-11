import { useState, useEffect } from "react"
import auth from "@react-native-firebase/auth"

export default function useSignup(user, email, password) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      setLoading(true)
      setUser({ message: "Usuario creado satisfactoriamente" })
      setLoading(false)
    })
    .catch(error => {
      setLoading(true)
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya esta siendo usado, intenta con otro.")
      }

      if (error.code === "auth/invalid-email") {
        setError("El email es incorrecto")
      }
      setLoading(false)
    })

  return loading, user, error
}
