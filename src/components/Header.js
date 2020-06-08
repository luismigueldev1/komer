import React from "react"
import { TouchableOpacity } from "react-native"
import { Container } from "../styled/Header"

//assets
import KomerIco from "../assets/images/komer_ico.svg"
import BurgerMenu from "../assets/images/burger_menu.svg"

export default function Header({ login }) {
  return (
    <Container>
      <TouchableOpacity>
        <KomerIco width={40} height={40} />
      </TouchableOpacity>
      {!login ? (
        <TouchableOpacity>
          <BurgerMenu width={30} height={30} />
        </TouchableOpacity>
      ) : null}
    </Container>
  )
}
