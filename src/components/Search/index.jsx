import React, { useState } from 'react'
import { SearchEngine } from './style'
import search from '../../static/icons/search.svg'
import axios from 'axios'

function Search() {
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const {
      data: {
        jobs: { job },
      },
    } = await axios.get(`https://saramserver.herokuapp.com/saram/job/${text}`)
    console.log(job)
  }

  return (
    <SearchEngine>
      <img src={search} alt="검색" />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="키워드를 입력해주세요"
          value={text}
          onChange={onChange}
        />
      </form>
      <ul>
        <li>직무별</li>
        <li>산업별</li>
        <li>지역별</li>
      </ul>
    </SearchEngine>
  )
}

export default Search
