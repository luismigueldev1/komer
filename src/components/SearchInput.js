import React from "react"
import { InputControl, Input } from "../styled/SearchInput"
import SearchIco from "../assets/images/search_ico.svg"

export default function SearchInput() {
  return (
    <InputControl>
      <SearchIco height={18} width={18} />
      <Input placeholder="¿Qué vamos a kömer hoy?" />
    </InputControl>
  )
}
