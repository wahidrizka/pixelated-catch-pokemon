import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styled from "@emotion/styled"
import { Text } from "."
import { colors } from "../libs/utils"

const getStyle = ({ nickname }) => {
  return `
  .capture-qty,
  button {
    position: absolute;
    top: 4px;
    right: 8px;
    display: flex;
    gap: 4px;
    align-items: center;
  }
  cursor: ${nickname ? "default" : "pointer"};
  &:hover {
    background-color: ${nickname ? colors["yellow-300"] : colors["yellow-400"]};
  }
  &:active::after {
    box-shadow: inset ${nickname ? "-4px -4px" : "4px 4px"} ${
    colors["blue-500"]
  };
  }
  img {
    margin: 0 auto;
  }
  `
}

const PixelatedPokemonCard = styled("div")(props => getStyle(props))

const PokeCard = ({ name, nickname, captured, sprite, children }) => {
  return (
    <PixelatedPokemonCard nickname={nickname} className="pxl-border">
      {nickname && (
        <>
          <LazyLoadImage src={sprite} alt={name} width={96} height={96} />
          <Text variant="darker" size="lg">
            {nickname}
          </Text>
        </>
      )}
      <Text variant="outlined">{name}</Text>
      {children}
      {captured ? (
        <div className="capture-qty">
          <LazyLoadImage
            src="/static/pokeball.png"
            alt="pokeball"
            width={16}
            height={16}
          />
          <Text>x{captured}</Text>
        </div>
      ) : null}
    </PixelatedPokemonCard>
  )
}

export default PokeCard
