import React from "react"
import styled from "@emotion/styled"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { Text } from "."
import { units, colors } from "../libs/utils"

const getStyle = ({ variant = "sky" }) => {
  const style = {
    display: "flex",
    gap: units.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  }

  switch (variant) {
    case "light":
      return {
        ...style,
        background: colors["green-400"],
        "&:not(.no-inset)::after": {
          boxShadow: `inset -4px -4px ${colors["green-500"]}`
        },
        "&:hover": {
          backgroundColor: colors["green-300"]
        },
        "&:active::after": {
          boxShadow: `inset 4px 4px ${colors["green-500"]}`
        }
      }
    case "dark":
      return {
        ...style,
        background: colors["yellow-400"],
        "&:not(.no-inset)::after": {
          boxShadow: `inset -4px -4px ${colors["yellow-500"]}`
        },
        "&:hover": {
          backgroundColor: colors["yellow-300"]
        },
        "&:active::after": {
          boxShadow: `inset 4px 4px ${colors["yellow-500"]}`
        }
      }
    default:
      return {
        ...style,
        background: colors["blue-400"],
        "&:not(.no-inset)::after": {
          boxShadow: `inset -4px -4px ${colors["blue-500"]}`
        },
        "&:hover": {
          backgroundColor: colors["blue-300"]
        },
        "&:active::after": {
          boxShadow: `inset 4px 4px ${colors["blue-500"]}`
        }
      }
  }
}

const PixelatedButton = styled("button")(props => getStyle(props))

const Button = ({ children, size = "lg", icon, ...props }) => {
  return (
    <PixelatedButton className="pxl-border" {...props}>
      {icon && (
        <LazyLoadImage
          src={icon}
          alt="button icon"
          width={size === "xl" ? 40 : 20}
          height={size === "xl" ? 40 : 20}
        />
      )}
      <Text variant="outlined" size={size}>
        {children}
      </Text>
    </PixelatedButton>
  )
}

export default Button
