import React from "react"
import styled from "@emotion/styled"
import { colors, units, textShadow } from "../libs/utils"

const getStyle = ({ variant = "default", size = "base", as = "p" }) => {
  switch (variant) {
    case "outlined":
      return {
        as,
        color: colors["slate-100"],
        textShadow: textShadow[`bold-${size}`],
        fontSize: units.fontSize[size]
      }
    case "darker":
      return {
        as,
        color: colors["slate-900"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size]
      }
    case "error":
      return {
        as,
        color: colors["red-200"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size]
      }
    default:
      return {
        as,
        color: colors["slate-800"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size]
      }
  }
}

const PixelatedText = styled("p")(props => getStyle(props))

const Text = ({ children, ...props }) => {
  return <PixelatedText {...props}>{children}</PixelatedText>
}

export default Text;