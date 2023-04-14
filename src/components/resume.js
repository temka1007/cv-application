import React, { Component } from "react"

const Resume = ({ Arr }) => {
  console.log(Arr)
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="green-section">{Arr[0].value}</div>
      </div>
    </div>
  )
}

export default Resume
