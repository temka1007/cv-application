import "./App.css"
import { useState } from "react"
import React, { Component } from "react"
import NavBar from "./components/navbar"
import Resume from "./components/resume"
import Info from "./components/contact-information"

const App = () => {
  const [profilePic, setProfilePic] = useState("")

  const [Arr, setArr] = useState([
    {
      value: "",
      id: "FirstName",
    },
    {
      value: "",
      id: "LastName",
    },
    {
      value: "",
      id: "Occupation",
    },
    {
      value: "",
      id: "Phone",
    },
    {
      value: "",
      id: "Email",
    },
  ])

  const handleArr = (text, id) => {
    setArr(
      Arr.map(obj => {
        if (obj.id === id) {
          return { ...obj, value: text }
        } else {
          return obj
        }
      })
    )
  }

  const handleResumeProfile = value => {
    setProfilePic(value)
  }

  return (
    <>
      <NavBar />
      <div className="progress"></div>
      <div>
        <div className="form-creator">
          <div>
            <Info
              handleArr={handleArr}
              handleResumeProfile={handleResumeProfile}
            />
          </div>
          <div className="section-navigator">
            <button className="navigation-btn">Finish</button>
          </div>
        </div>
        <Resume Arr={Arr} profilePic={profilePic} />
      </div>
    </>
  )
}

export default App
