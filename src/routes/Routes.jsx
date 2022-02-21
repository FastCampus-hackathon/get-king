import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Compare from './Compare'
import CompareList from './CompareList'
import Login from './Login'
import Home from './Home'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/compare-list" element={<CompareList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
