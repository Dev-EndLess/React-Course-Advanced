import React from "react";
import UserContext from "./UserContext"

function Header(props) {
    return (
      <UserContext.Consumer>
        {username => (
      <header>
        <p>Welcome, {username}!</p>
      </header>
        )}
      </UserContext.Consumer>
    );
}

export default Header;
