import React, { useState } from 'react'
import { SearchEngine } from './style'
import search from '../../static/icons/search.svg'

function Search() {
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(text)
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
