import React, { useReducer, useCallback, useState } from "react"
import validator from "validator"
import Modal from "react-modal"

import { FormInput, FormTextarea } from "./common/form-control"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const ContactForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: { value: "", error: "" },
      lastname: { value: "", error: "" },
      company: { value: "", error: "" },
      email: { value: "", error: "" },
      message: "",
    }
  )
  const { firstname, lastname, company, email, message } = state
  const handleFirstnameChange = useCallback(e => {
    setState({
      firstname: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "Length must be at least 3",
      },
    })
  }, [])
  const handleLastnameChange = useCallback(e => {
    setState({
      lastname: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "Length must be at least 3",
      },
    })
  }, [])
  const handleCompanyChange = useCallback(e => {
    setState({
      company: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "Length must be at least 3",
      },
    })
  }, [])
  const handleEmailChange = useCallback(e => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "Invalid email address",
      },
    })
  }, [])
  const handleMessage = useCallback(e => {
    e.preventDefault()
    setState({ [e.target.name]: e.target.value })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <FormInput
              type="text"
              name="firstname"
              value={firstname.value}
              onChange={handleFirstnameChange}
              placeholder="First Name"
              error={firstname.error}
              required
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              name="lastname"
              value={lastname.value}
              onChange={handleLastnameChange}
              placeholder="Last Name"
              error={lastname.error}
              required
            />
          </div>
        </div>
        <FormInput
          type="email"
          name="email"
          value={email.value}
          onChange={handleEmailChange}
          placeholder="Your Professional Email"
          error={email.error}
          required
        />
        <FormInput
          type="tel"
          name="company"
          value={company.value}
          onChange={handleCompanyChange}
          placeholder="Your Company"
          error={company.error}
          required
        />

        <FormTextarea
          type="text"
          name="message"
          value={message}
          onChange={handleMessage}
          placeholder="Your message"
        />
        <button type="submit" className="btn btn-red">
          Submit
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
      >
        <h3 className="text-center my-3">Email sent successfully</h3>
        <p>We will be in touch with you soon</p>
      </Modal>
    </div>
  )
}

export default ContactForm
