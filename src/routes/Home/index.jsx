import React from 'react'
import Departments from '../../components/Departments'
import Search from '../../components/Search'
import SideBar from '../../components/SideBar'

function Home() {
  return (
    <>
      <Search />
      <Departments />
      <SideBar />
    </>
  )
}

export default Home
