import React, { Component } from "react"

const Resume = ({ data, profilePic }) => {
  function findTest(firstId) {
    const one = data.find(value => value.id === "General Info")
    if (one.data[0] === null) {
      return ""
    } else {
      const two = one.data.find(value => value.id === firstId)
      return two.value
    }
  }

  return (
    <div className="resume-container">
      <div className="resume">
        <div className="white-section">
          <div className="name-job-resume">
            <div className="name">{findTest("FirstName")} DICKENS</div>
            <div className="job">Reporter/Journalist</div>
          </div>
          <div className="experience">
            <div className="resume-title">EXPERIENCE</div>
            <div>
              <div className="when">
                <div>2001</div>
                <div>Present</div>
              </div>
              <div className="experience-detail">
                <div className="position">REPORTER/JOURNALIST</div>
                <div className="company">The Daily Planet, Metropolis</div>
                <div className="where">| Los Angeles, CA</div>
                <div className="function">
                  Conduct in-depth research, interviews, and investigations to
                  uncover news stories on various topics, including politics,
                  crime, and human interest stories. Write engaging and
                  informative articles for print and online publications,
                  adhering to strict deadlines and editorial guidelines.
                </div>
              </div>
            </div>
          </div>
          <div className="education-resume">
            <div className="resume-title">EDUCATION</div>
            <div>
              <div className="when">
                <div>1991</div>
                <div>1995</div>
              </div>
              <div className="education-detail">
                <div className="degree">Bachelor of Arts in Journalism</div>
                <div className="university">Metropolis University</div>
                <div className="where">| Santa Ana, CA</div>
              </div>
            </div>
          </div>
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
          <div className="skills-resume">
            <div>SKILLS</div>
            <ul style={{ listStyleType: "disc", paddingLeft: "15px" }}>
              <li>Strong writing</li>
              <li>Good public speaker</li>
            </ul>
          </div>
          <div className="language-resume">
            <div>LANGUAGES</div>
            <ul style={{ listStyleType: "disc", paddingLeft: "15px" }}>
              <li>French | Advanced</li>
              <li>English | Advanced</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
