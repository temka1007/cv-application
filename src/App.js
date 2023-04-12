import "./App.css"
import React, { Component } from "react"
import NavBar from "./components/navbar"
import Progress from "./components/progress"
import FormCreator from "./components/form-creator"
import Resume from "./components/resume"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Progress />
        <div>
          <FormCreator />
          <Resume />
        </div>
      </>
    )
  }
}

export default App
