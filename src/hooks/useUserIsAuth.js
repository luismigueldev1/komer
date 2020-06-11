import { useState, useEffect } from "react"
import auth from "@react-native-firebase/auth"

export default function useUserIsAuth() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const watchAuthState = user => {
    setUser(user)
    setLoading(false)
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(watchAuthState)
    return subscriber
  }, [user])

  return { user, loading }
}
