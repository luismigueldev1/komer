import React from "react"
import { TouchableOpacity } from "react-native"
import { Header } from "../styled/Header"

//assets
import KomerIco from "../assets/images/komer_ico.svg"
import BurgerMenu from "../assets/images/burger_menu.svg"

export default function TopBar() {
  return (
    <Header>
      <TouchableOpacity>
        <KomerIco width={40} height={40} />
      </TouchableOpacity>
      <TouchableOpacity>
        <BurgerMenu width={30} height={30} />
      </TouchableOpacity>
    </Header>
  )
}
