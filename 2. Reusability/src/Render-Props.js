import React from "react"
import Example from "./RenderProps/Example"
import Menu from "./RenderProps/RenderMenu"
import Favorite from "./RenderProps/RenderFavorite"

function RenderProps() {
  return (
    <div>
      <Example render={
        function (bool, number) {
          return (
            <div>
              <h1>{number}</h1>
              <h1>{bool ? "true" : "false"}</h1>
            </div>
          )
        }
      } />

      <Menu />
      <hr />
      <Favorite />
    </div>
  )
}

export default RenderProps