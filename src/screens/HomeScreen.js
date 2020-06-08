import React from "react"
import { View, ScrollView, SafeAreaView } from "react-native"
import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import PopularList from "../components/PopularList"
import CategoryList from "../components/CategoryList"

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SearchInput />
        <PopularList title="Sitios Populares" query="popular_sites" />
        <PopularList title="Comidas Populares" query="popular_foods" />
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  )
}
