import React, { useState, createRef, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { Text, Button, Loading, Navbar, PokeCard } from "../../components"
import { useGlobalContext } from "../../libs/context"

import * as T from "./index.style"

const Explore = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokeUrl, setPokeURL] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`
  )
  const [isLoading, setIsLoading] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const { state } = useGlobalContext()
  const navRef = createRef()
  const shouldLog = useRef(true)

  async function loadPokemons() {
    if (pokeUrl) {
      try {
        setIsLoading(true)
        const { data } = await axios.get(pokeUrl)

        const mapped = data.results?.map(result => {
          const summaryIdx = state.pokeSummary.findIndex(
            el => el.name === result.name.toUpperCase()
          )
          return {
            name: result.name,
            url: result.url,
            captured: state.pokeSummary[summaryIdx]?.captured || 0
          }
        })

        setPokemons(prevState => [...prevState, ...mapped])
        setPokeURL(data.next || "")
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false
      setNavHeight(navRef.current?.clientHeight)
      loadPokemons()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <T.Container style={{ marginBottom: navHeight }}>
        <Text as="h1" variant="outlined" size="lg">
        Let's Choose &amp; Catch Your Pokémons
        </Text>
        <T.Grid>
          {pokemons.length
            ? pokemons.map(pokemon => (
                <Link
                  key={`${pokemon.name}-${Math.random()}`}
                  to={"/pokemon/" + pokemon.name}
                  style={{ display: "flex" }}
                >
                  <PokeCard name={pokemon.name} captured={pokemon.captured} />
                </Link>
              ))
            : null}
        </T.Grid>
        {!isLoading ? (
          pokeUrl && (
            <T.Footer>
              <Button variant="dark" onClick={() => loadPokemons()}>Load More</Button>
            </T.Footer>
          )
        ) : (
          <Loading label="Please wait..." />
        )}
      </T.Container>

      <Navbar ref={navRef} />
    </>
  )
}

export default Explore
