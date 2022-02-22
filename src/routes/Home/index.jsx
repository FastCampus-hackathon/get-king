import axios from "axios"
import React, { useState } from "react"
import Departments from "../../components/Departments"
import Detail from "../../components/Detail"
import SideBar from "../../components/SideBar"
import styled from "styled-components"

function Home() {
  const [text, setText] = useState("")
  const [res, setRes] = useState()
  const [res2, setRes2] = useState()
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(
      "https://saramserver.herokuapp.com/saram/42385059"
    )
    setRes(data)
  }

  const onSubmit2 = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(
      "https://saramserver.herokuapp.com/saram",
      { keywords: "패스트파이브", loc_cd: "101010" }
    )
    setRes2(data)
  }

  console.log(res)
  console.log(res2)

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">검색</button>
      </form>

      <form onSubmit={onSubmit2}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">검색2</button>
      </form>
      <Departments />
      {res && <Detail data={res} />}
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
