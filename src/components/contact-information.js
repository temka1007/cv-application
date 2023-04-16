import React, { Component } from "react"
import { useState } from "react"
import Resume from "./resume"
import Experience from "./experience"
import Education from "./eduction"
import Skills from "./skills"
import Languages from "./languages"
import Objective from "./objective"
import emptyProfileImage from "../images/847-8474751_download-empty-profile.png"

class Title extends Component {
  render() {
    return (
      <div>
        <div className="title">Tell us a little about yourself</div>
        <div className="description">
          Let us know who you are, how employers can get in touch with you, and
          what your profession is.
        </div>
        <div>
          Contact Information &nbsp;
          <span className="material-symbols-outlined">edit</span>
        </div>
      </div>
    )
  }
}

const AddPhoto = ({ handleResumeProfile }) => {
  const [file, setFile] = useState(emptyProfileImage)

  const getImg = event => {
    const newFile = event.target.files[0]

    const reader = new FileReader()

    reader.readAsDataURL(newFile)

    reader.onload = e => {
      setFile(e.target.result)
      handleResumeProfile(e.target.result)
    }
  }

  return (
    <div className="image-upload-container">
      <div className="form-profile-image">
        <img src={file} alt="profile" />
      </div>
      <div>
        <div>Profile Photo</div>
        <label className="add-photo">
          <span className="material-symbols-outlined">upload_file</span>
          &nbsp;Add Photo
          <input
            type="file"
            id="fileInput"
            className="fileInput"
            accept="image/png, image/gif, image/jpeg"
            onChange={getImg}
          />
        </label>
      </div>
    </div>
  )
}

const Input = ({ title, example, handleInfo, id }) => {
  const [text, setText] = useState("")

  const sendText = e => {
    const updatedText = e.target.value
    setText(updatedText)
    handleInfo(updatedText, id)
  }

  return (
    <div className="input-container">
      <div className="input">
        <input
          type="text"
          id="input"
          placeholder=" "
          onChange={sendText}
          value={text}
        />
        <label className="test" htmlFor="input">
          {title}
        </label>
      </div>
      <div className="example">{example}</div>
    </div>
  )
}

const ContactInfo = ({ handleResumeProfile, handleArr }) => {
  const [generalInfo, setGeneralInfo] = useState([
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
    {
      value: "",
      id: "Objective",
    },
  ])

  const handleInfo = (text, id) => {
    const newData = generalInfo.map(obj => {
      if (obj.id === id) {
        return { ...obj, value: text }
      } else {
        return obj
      }
    })

    setGeneralInfo(newData)

    handleArr(newData, "General Info")
  }

  return (
    <form>
      <AddPhoto handleResumeProfile={handleResumeProfile} />
      <Input
        title="First Name"
        example="e.g. Sarah"
        handleInfo={handleInfo}
        id="FirstName"
      />
      <Input
        title="Last Name"
        example="e.g. Clark"
        handleInfo={handleInfo}
        id="LastName"
      />
      <Input
        title="Occupation"
        example="e.g. Sales Associate"
        handleInfo={handleInfo}
        id="Occupation"
      />
      <Input
        title="Address"
        example="e.g. 54 Corbett Road, San Francisco, CA 94100"
        handleInfo={handleInfo}
        id="Address"
      />
      <Input
        title="Phone"
        example="e.g. (551) 123-7676"
        handleInfo={handleInfo}
        id="Phone"
      />
      <Input
        title="Email"
        example="e.g. clark.kent@email.com"
        handleInfo={handleInfo}
        id="Email"
      />
      <Input
        title="Objective"
        example="e.g. Proactive, customer-orientated retail professional with over 4 years of experience in reputable shops. Received 3 ‘Passion Awards’ for delivering outstanding service and have consistently surpassed my target KPIs for mystery shoppers."
        handleInfo={handleInfo}
        id="Objective"
      />
    </form>
  )
}

const Info = ({ handleArr, handleResumeProfile }) => {
  return (
    <div className="info">
      <Title />
      <ContactInfo
        handleResumeProfile={handleResumeProfile}
        handleArr={handleArr}
      />
    </div>
  )
}

export default Info
