import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CompareItem from '../../components/CompareItem'

function CompareList() {
  const [list, setList] = useState()
  useEffect(() => {
    const { data } = axios.get('https://saramserver.herokuapp.com/set')
    setList(data)
  }, [])
  return list.map((item) => <CompareItem item={item} />)
}

export default CompareList
