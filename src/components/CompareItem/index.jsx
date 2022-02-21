import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Detail from '../Detail'

function CompareItem({ item }) {
  const [employment, setEmployment] = useState([])

  useEffect(() => {
    const getItems = async (id) => {
      const { data } = await axios.get(
        `https://saramserver.herokuapp.com/saram/${id}`
      )

      setEmployment([...data])
    }

    item.ids.map((el) => getItems(el))
  }, [])

  return (
    <div>
      <h2>item.name</h2>
      {employment.length && employment.map((el) => <Detail data={el} />)}
    </div>
  )
}

export default CompareItem
