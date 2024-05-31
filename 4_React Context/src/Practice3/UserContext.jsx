import React from "react"
import { Component } from "react"

const UserContext = React.createContext()
const {Provider, Consumer} = UserContext

class ChallengeContextProvider extends Component {
  state = {
    username: "Endless"
  }

  changeUsername = (username) => {
    this.setState({username})
}

  render() {
    const {username} = this.state
    return (
      <Provider value={{username, changeUsername: this.changeUsername}}>
        {this.props.children}
      </Provider>
    )
  }
}


export {ChallengeContextProvider, Consumer as ChallengeContextConsumer}