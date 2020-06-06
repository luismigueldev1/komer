import React from "react"
import { Container, CategoryItem } from "../styled/CategoryList"

//assets

//local's
import LocalIco from "../assets/images/local_ico.svg"
import LocalText from "../assets/images/local_text.svg"

export default function CategoryList() {
  return (
    <Container>
      <CategoryItem color="#471302">
        <LocalIco width="50%" height="100px" />
        <LocalText width="50%" height="100px" />
      </CategoryItem>

      <CategoryItem color="#471302">
        <LocalIco width="50%" height="100px" />
        <LocalText width="50%" height="100px" />
      </CategoryItem>
    </Container>
  )
}
