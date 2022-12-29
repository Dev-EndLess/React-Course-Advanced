import React from "react";
// import { Component } from "react";
import { WithToggler } from "./WithToggler";

function Favorite(props) {
  // class Favorite extends Component {
  // state = {
  //     isFavorited: false
  // }

  // toggleFavorite = () => {
  //     this.setState(prevState => {
  //         return {
  //             isFavorited: !prevState.isFavorited
  //         }
  //     })
  // }
  //}

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={props.toggle}>{props.on ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}
const SuperChargedFavoriteComponent = WithToggler(Favorite, {
  defaultOnValue: false,
});
export default SuperChargedFavoriteComponent;
