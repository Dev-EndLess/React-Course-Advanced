import React from "react";
import {ChallengeContextConsumer} from "./UserContext"

function Header() {
  return (
    <header>
      <ChallengeContextConsumer>
        {({username}) => <p>Welcome, {username}!</p>}
      </ChallengeContextConsumer>
    </header>
  );
}

export default Header;
