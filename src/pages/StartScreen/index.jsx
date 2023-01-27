import React from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "../../components";
import { Button } from "../../components";

import * as T from "./index.style";

const StartScreen = () => {
  const navigate = useNavigate();
  return (
    <T.Container>
      <T.Centering>
        <Text variant="outlined" size="lg">
          LET'S CATCH POKEMON
        </Text>
        <Button onClick={() => navigate("/pokemons")}>
          START
        </Button>
        <Text variant="outlined" size="base">
          Source API{" "}
          <T.A href="https://pokeapi.co" target="_blank">
            here
          </T.A>
        </Text>
      </T.Centering>
      <div style={{ position: "absolute", bottom: 18 }}>
        <Text variant="outlined">
          &copy;{new Date().getFullYear()} wahidrizkafathurrohman
        </Text>
      </div>
    </T.Container>
  )
}

export default StartScreen;
