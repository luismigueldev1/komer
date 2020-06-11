import { ToastAndroid } from "react-native"
export default function Toast(message) {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    0,
    170
  )
}
