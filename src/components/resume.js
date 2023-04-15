import React, { Component } from "react"

const Resume = ({ Arr, profilePic }) => {
  console.log(Arr)
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="white-section">
          <div className="name-resume"></div>
          <div className="experience"></div>
          <div className="education-resume"></div>
        </div>
        <div className="green-section">
          <div className="profile-pic-resume">
            <img src={profilePic} alt="profile" />
          </div>
          <div className="contact-resume">
            <div className="email">
              <span className="material-symbols-outlined">mail</span>
              clark.kent@email.com
            </div>
            <div className="address">
              <span className="material-symbols-outlined">home_pin</span>
              1234 Elm Street New York, NY 10001
            </div>
            <div className="phone">
              <span className="material-symbols-outlined">phone_android</span>
              (555) 123-4567
            </div>
          </div>
          <div className="objective-resume">
            <div className="objective-title">OBJECTIVE</div>
            <div className="objective">
              Aspiring journalist and investigative reporter with a passion for
              uncovering the truth and bringing justice to light. Seeking a role
              that allows me to utilize my exceptional writing skills, keen
              observation, and unwavering dedication to pursue stories that make
              a meaningful impact on society.
            </div>
          </div>
          <div className="skills-resume"></div>
          <div className="language-resume"></div>
        </div>
      </div>
    </div>
  )
}

export default Resume
