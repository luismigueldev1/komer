import { useState, useEffect } from "react"
import { getPopular } from "../services/firebase"
export default function useGetPopular({ collection }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular({ collection })
      .then(popular => {
        setPopular(popular)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])
  return { loading, error, popular }
}