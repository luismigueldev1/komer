import React, { useEffect, useState } from "react"
import {
  Container,
  Title,
  SiteContainer,
  Site,
  Spinner
} from "../styled/PopularList"
import { SvgUri } from "react-native-svg"

export default function PopularList({ title }) {
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <Container>
      <Title>{title}</Title>

      {loading ? (
        <Spinner size="large" color="#7e0000" />
      ) : (
        <SiteContainer>
          {popular.map((site, index) => (
            <Site color={color} key={index}>
              <SvgUri width={50} height={50} uri={site.image} />
            </Site>
          ))}
        </SiteContainer>
      )}
    </Container>
  )
}
