import React from "react"
import Header from "./Header"
import UserContext from "./UserContext"

function App2() {
    return (
      <div>

        <Header username="EndLess" />
        <UserContext.Consumer>
          {username => (
        <main>
          <p className="main">No new notifications, {username}! 🎉</p>
        </main>
          )}
        </UserContext.Consumer>
      </div>
    )
}

export default App2