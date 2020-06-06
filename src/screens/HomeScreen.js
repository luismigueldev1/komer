import React from "react"
import { View, ScrollView, SafeAreaView } from "react-native"
import TopBar from "../components/TopBar"
import SearchInput from "../components/SearchInput"
import PopularList from "../components/PopularList"
import CategoryList from "../components/CategoryList"

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopBar />
        <SearchInput />
        <PopularList title="Sitios Populares" />
        <PopularList title="Comidas Populares" />
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
