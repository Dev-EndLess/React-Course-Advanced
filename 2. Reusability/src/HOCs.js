import React from 'react'
import {WithFavoriteNumber} from './HOCs/WithFavoriteNumber'
import Menu from './HOCs/Menu'
import Favorite from './HOCs/Favorite'

// HIGHER ORDER COMPONENTS
// Definition: A function that takes a component as its first argument 
// and returns a new component that wraps the given component, 
// providing extra capabilities to it.

function HOCs(props) {
  console.log(props)
  return (
    <div>
      {props.favoriteNumber}
      <Menu/>
      <hr />
      <Favorite/>
    </div>
  )
}

const ExtraPropComponent = WithFavoriteNumber(HOCs)
export default ExtraPropComponent