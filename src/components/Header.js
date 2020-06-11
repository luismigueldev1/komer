import React from "react"
import { TouchableOpacity } from "react-native"
import { Container } from "../styled/Header"
import auth from "@react-native-firebase/auth"
import { useNavigation } from "@react-navigation/native"

//assets
import KomerIco from "../assets/images/komer_ico.svg"
import BurgerMenu from "../assets/images/burger_menu.svg"

export default function Header() {
  const navigation = useNavigation()
  const handleSingout = () => {
    auth().signOut()
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleSingout}>
        <KomerIco width={40} height={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <BurgerMenu width={30} height={30} />
      </TouchableOpacity>
    </Container>
  )
}
