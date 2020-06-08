import React from "react"
import { TouchableOpacity } from "react-native"
import { Container } from "../styled/LoginHeader"

//assets
import KomerIco from "../assets/images/komer_ico.svg"

export default function Header() {
  return (
    <Container>
      <KomerIco width={40} height={40} />
    </Container>
  )
}
