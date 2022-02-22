import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import { ThemeProvider } from 'styled-components'
import {theme} from '../styles'
import GlobalStyle from '../styles/globalStyle'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <GlobalStyle />

        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default Router
