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
  const [file, setFile] = useState("")

  const getImg = event => {
    const newFile = event.target.files[0]

    const reader = new FileReader()

    reader.readAsDataURL(newFile)

    reader.onload = e => {
      setFile(e.target.result)
    }
  }

  const img = pic => {
    if (pic === "") {
      handleResumeProfile(emptyProfileImage)
      return emptyProfileImage
    } else {
      handleResumeProfile(file)
      return file
    }
  }

  return (
    <div className="image-upload-container">
      <div className="form-profile-image">
        <img src={img(file)} />
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
            onChange={getImg}
          />
        </label>
      </div>
    </div>
  )
}

const Input = ({ title, example, handleArr, id }) => {
  const [text, setText] = useState("")

  const sendText = e => {
    const updatedText = e.target.value
    setText(updatedText)
    handleArr(updatedText, id)
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

const ContactInfo = ({ handleArr, handleResumeProfile }) => {
  return (
    <form>
      <AddPhoto handleResumeProfile={handleResumeProfile} />
      <Input
        title="First Name"
        example="e.g. Sarah"
        handleArr={handleArr}
        id="FirstName"
      />
      <Input
        title="Last Name"
        example="e.g. Clark"
        handleArr={handleArr}
        id="LastName"
      />
      <Input
        title="Occupation"
        example="e.g. Sales Associate"
        handleArr={handleArr}
        id="Occupation"
      />
      <Input
        title="Address"
        example="e.g. 54 Corbett Road, San Francisco, CA 94100"
        handleArr={handleArr}
        id="Address"
      />
      <Input
        title="Phone"
        example="e.g. (551) 123-7676"
        handleArr={handleArr}
        id="Phone"
      />
      <Input
        title="Email"
        example="e.g. clark.kent@email.com"
        handleArr={handleArr}
        id="Email"
      />
    </form>
  )
}

const Info = ({ handleArr, handleResumeProfile }) => {
  return (
    <div className="info">
      <Title />
      <ContactInfo
        handleArr={handleArr}
        handleResumeProfile={handleResumeProfile}
      />
    </div>
  )
}

export default Info
