import React from "react"
import Departments from "../../components/Departments"
import SideBar from "../../components/SideBar"
import Search from "../../components/Search"
import styled from "styled-components"

function Home() {
  return (
    <Container>
      <Search />
      <Departments />
      <SideBar />
    </Container>
  )
}

export default Home

const Container = styled.div`
  max-width: 1160px;
  position: relative;

  .wrap {
    display: flex;
    flex-direction: column;

    .search-result {
      display: block;
      height: 92px;
    }
  }
`
