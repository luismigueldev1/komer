import React, { useEffect, useState } from "react"
import {
  Container,
  Title,
  SiteContainer,
  Site,
  Spinner
} from "../styled/PopularList"
import { Text } from "react-native"
import { SvgUri } from "react-native-svg"
import firestore from "@react-native-firebase/firestore"

export default function PopularList({ title, query }) {
  const [popular, setPopular] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let data = []
    firestore()
      .collection(query)
      .get()
      .then(docs => {
        docs.forEach(doc => data.push(doc.data()))
        setPopular(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <Container>
      <Title>{title}</Title>

      {loading ? (
        <Spinner size="large" color="#7e0000" />
      ) : (
        <SiteContainer>
          {error && <Text> {error}</Text>}

          {query == "popular_sites" ? (
            popular.map((site, index) => (
              <Site color={site.color} key={index}>
                <SvgUri width={60} height={60} uri={site.image} />
              </Site>
            ))
          ) : (
            <Text>Popular Food</Text>
          )}
        </SiteContainer>
      )}
    </Container>
  )
}
