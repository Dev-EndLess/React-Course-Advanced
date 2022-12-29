import React from "react"
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header"
import Button from "./Button"
import "./Style1.css"

function App1() {
  const context = useContext(ThemeContext)
  return (
    <div>
      <Header />
        <Button theme={context.theme}/>
    </div>
  )
}

export default App1