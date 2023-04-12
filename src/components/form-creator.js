import React, { Component } from "react"
import Info from "./contact-information"
import Experience from "./experience"
import Education from "./eduction"
import Skills from "./skills"
import Languages from "./languages"
import Objective from "./objective"

class FormCreator extends Component {
  render() {
    return (
      <div className="form-creator">
        <div>
          <Info />
        </div>
        <div className="section-navigator"></div>
      </div>
    )
  }
}

export default FormCreator
