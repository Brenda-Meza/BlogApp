import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Login() {
  const [userForm, setUserForm] = useState({
    email: "",
    user: "",
    pass: "",
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
      .post("http://localhost:4000/users/get-user/:id", userForm)
      .then((res) => {
        console.log(res.data)
        setUserForm({
          email: "",
          name: "",
          pass: "",
        })
      })
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Sign In</h1>
        <div className="form-wrapper">
          <form onSubmit={onSubmit} className="form">
            <div className="input-container">
              <p>Sign in via email</p>
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

              <p>Sign in via username</p>
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

            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary"
                disabled = {
                  userForm.name.length < 5 ||
                  userForm.email.length < 3 ||
                  userForm.pass.length < 8 ||
                  userForm.pass/length >21
                }
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>   
  )
}