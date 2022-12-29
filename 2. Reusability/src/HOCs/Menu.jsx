import React from "react";
// import { Component } from "react";
import { WithToggler } from "./WithToggler";

function Menu(props) {
  // class Menu extends Component {
  // state = {
  //   show: true,
  // };

  // toggleShow = () => {
  //   this.setState((prevState) => {
  //     return {
  //       show: !prevState.show,
  //     };
  //   });
  // };
  //}

  return (
    <div>
      <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>Signed in as Coder123</h6>
        <a>Your Profile</a>
        <a>Your Repositories</a>
        <a>Your Stars</a>
        <a>Your Gists</a>
      </nav>
    </div>
  );
}

const SuperChargedMenuComponent = WithToggler(Menu, { defaultOnValue: true });
export default SuperChargedMenuComponent;
