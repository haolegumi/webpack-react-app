import Auth from '@src/apis/auth'
import React from 'react'

function Login() {
  const login = async () => {
    await Auth.login({
      email: 'hao@gmail.com',
      password: '123456'
    })
  }
  return (
    <React.Fragment>
      <div>Form Login</div>
      <button onClick={login}>Click</button>
    </React.Fragment>
  )
}

export default Login
