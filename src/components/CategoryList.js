import React from "react"
import { Container, CategoryItem } from "../styled/CategoryList"

//local's
import LocalIco from "../assets/images/local_ico.svg"
import LocalText from "../assets/images/local_text.svg"
//fastfood
import FoodIco from "../assets/images/food_ico.svg"
import FoodText from "../assets/images/food_text.svg"
//healthy
import HealthyIco from "../assets/images/healthy_ico.svg"
import HealthyText from "../assets/images/healthy_text.svg"
//sweet
import SweetIco from "../assets/images/sweet_ico.svg"
import SweetText from "../assets/images/sweet_text.svg"
//drink
import DrinkIco from "../assets/images/drink_ico.svg"
import DrinkText from "../assets/images/drink_text.svg"
//farmacy
import FarmacyIco from "../assets/images/farmacy_ico.svg"
import FarmacyText from "../assets/images/farmacy_text.svg"

const width = "40%"
const height = "100px"

export default function CategoryList() {
  return (
    <Container>
      <CategoryItem color="#471302">
        <LocalIco width={width} height={height} />
        <LocalText width={width} height={height} />
      </CategoryItem>

      <CategoryItem color="#FF0000">
        <FoodIco width={width} height={height} />
        <FoodText width={width} height={height} />
      </CategoryItem>

      <CategoryItem color="#00728B">
        <HealthyIco width={width} height={height} />
        <HealthyText width={width} height={height} />
      </CategoryItem>

      <CategoryItem color="#561D5E">
        <SweetIco width={width} height={height} />
        <SweetText width={width} height={height} />
      </CategoryItem>

      <CategoryItem color="#0E72DE">
        <DrinkIco width={width} height={height} />
        <DrinkText width={width} height={height} />
      </CategoryItem>

      <CategoryItem color="#8D1D5B">
        <FarmacyIco width={width} height={height} />
        <FarmacyText width={width} height={height} />
      </CategoryItem>
    </Container>
  )
}
