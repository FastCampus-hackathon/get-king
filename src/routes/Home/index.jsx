import React from 'react'
import Departments from '../../components/Departments'
import SideBar from '../../components/SideBar'
import Search from '../../components/Search'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Search />
      <Departments />
      <div className="wrap">
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
        <div className="search-result">아싸라비아 콜롬버스</div>
      </div>
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
