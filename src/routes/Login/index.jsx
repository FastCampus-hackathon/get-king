import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('user', true)
    navigate('/')
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

export default Login
