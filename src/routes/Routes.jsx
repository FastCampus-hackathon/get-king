import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles'
import CompareList from './CompareList'
import GlobalStyle from '../styles/globalStyle'

const Router = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/compare-list" element={<CompareList />} />
          </Routes>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default Router
