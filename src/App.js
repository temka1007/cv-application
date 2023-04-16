import "./App.css"
import { useState } from "react"
import React, { Component } from "react"
import NavBar from "./components/navbar"
import Resume from "./components/resume"
import Info from "./components/contact-information"
import emptyProfileImage from "./images/847-8474751_download-empty-profile.png"

const App = () => {
  const [profilePic, setProfilePic] = useState(emptyProfileImage)

  const [Arr, setArr] = useState([
    {
      data: [null],
      id: "General Info",
    },
  ])

  const handleArr = (arr, id) => {
    setArr(
      Arr.map(obj => {
        if (obj.id === id) {
          return { ...obj, data: arr }
        } else {
          return obj
        }
      })
    )
  }

  const handleResumeProfile = value => {
    if (value !== "") {
      setProfilePic(value)
    }
  }

  console.log(Arr)

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
        <Resume profilePic={profilePic} data={Arr} />
      </div>
    </>
  )
}

export default App
