import React from "react"
import { useNavigate, useResolvedPath, useMatch } from "react-router-dom"
import styled from "@emotion/styled"

import { Text } from "."
import { units, colors } from "../libs/utils"

const getStyle = ({ variant = "sky", matched }) => {
  let style = {
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
        background: matched ? colors["green-300"] : colors["green-400"],
        "&:not(.no-inset)::after": {
          boxShadow: matched
            ? `inset 4px 4px ${colors["green-500"]}`
            : `inset -4px -4px ${colors["green-500"]}`
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
        background: matched ? colors["gray-100"] : colors["gray-200"],
        "&:not(.no-inset)::after": {
          boxShadow: matched
            ? `inset 4px 4px ${colors["gray-300"]}`
            : `inset -4px -4px ${colors["gray-300"]}`
        },
        "&:hover": {
          backgroundColor: colors["gray-100"]
        },
        "&:active::after": {
          boxShadow: `inset 4px 4px ${colors["gray-300"]}`
        }
      }
    default:
      return {
        ...style,
        background: matched ? colors["blue-300"] : colors["blue-400"],
        "&:not(.no-inset)::after": {
          boxShadow: matched
            ? `inset 4px 4px ${colors["blue-500"]}`
            : `inset -4px -4px ${colors["blue-500"]}`
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

const ALink = styled("a")({
  flexBasis: "50%",
  display: "flex"
})

const PixelatedNavItem = styled("button")(props => getStyle(props))

const NavItem = ({ variant = "sky", label, href }) => {
  let resolved = useResolvedPath(href)
  let matched = useMatch({ path: resolved.pathname })
  const navigate = useNavigate()

  return (
    <ALink onClick={() => navigate(href)}>
      <PixelatedNavItem
        className="pxl-border"
        variant={variant}
        matched={matched ? true : false}
      >
        <Text variant="outlined" size="lg">
          {label}
        </Text>
      </PixelatedNavItem>
    </ALink>
  )
}

export default NavItem
