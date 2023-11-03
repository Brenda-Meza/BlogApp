/* import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Register() {
  const cloud_name = "dfaucicwa"
  const [userForm, setUserForm] = useState({
    email: "",
    name: "",
    pass: "",
    confPass: "",
  })

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:4000/users/create-user", userForm)
      .then((res) => {
        console.log(res.data)
        setUserForm({
          email: "",
          name: "",
          pass: "",
          confPass: "",
        })
      })
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        <div className="form-wrapper">
          <form onSubmit={onSubmit} className="form">
            <div className="input-container">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  defaultValue={userForm.email}
                  onChange={inputsHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  defaultValue={userForm.name}
                  onChange={inputsHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="pass"
                  id="pass"
                  defaultValue={userForm.pass}
                  onChange={inputsHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="confPass"
                  id="confPass"
                  defaultValue={userForm.confPass}
                  onChange={inputsHandler}
                />
              </div>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary"
                disabled = {
                  userForm.name.length < 3 ||
                  userForm.email.length < 3 ||
                  userForm.pass.length < 8 ||
                  userForm.confPass.value !== userForm.pass.value
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>   
  )
}
 */


import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

export default function Register() {
  
  const cloud_name = "dfaucicwa"
  const [userForm, setUserForm] = useState({
    email: "",
    name: "",
    pass: "",
  })
  
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Form className='form' noValidate validated={validated} onSubmit={handleSubmit}>
      <div className='form-container'>
        <div>
          <Row className='form-name'>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className='form-info'>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

        
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" placeholder="Password" required />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers, no special characters
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please input a valid password
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        
        <div style={{ paddingBottom: '20px' }}>
        <Button type="submit">Register User</Button>
        </div>
      </div>
    </Form>
  )
}