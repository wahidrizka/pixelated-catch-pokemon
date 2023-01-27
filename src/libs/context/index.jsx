import React, { createContext, useState, useContext } from "react"
import { generatePokeSummary } from "../helpers"

const loadMyPokemon = () => {
  const rawPokemons = localStorage.getItem("pokegames@myPokemon")
  const parsed = JSON.parse(rawPokemons) || []
  return parsed
}

const initialState = {
  pokeSummary: generatePokeSummary(loadMyPokemon())
}

const GlobalContext = createContext({
  state: initialState,
  setState: () => {}
})

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {
  const [state, setGlobalContext] = useState(initialState)

  const setState = param => {
    setGlobalContext({ ...state, ...param })
  }

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  )
}
