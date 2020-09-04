import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
  const [ redirect, setRedirect ] = useState(false)
  const { setAuthenticatedUserId } = props

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login")
      if (response.data.id === 1) {
        setAuthenticatedUserId(response.data.id)
        setRedirect(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (redirect) {
    return <Redirect to='/orders' />
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
