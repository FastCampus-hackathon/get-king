import React from 'react'
import Detail from '../../components/Detail'

function Compare() {
  const employment1 = localStorage.getItem('employment1')
  const employment2 = localStorage.getItem('employment2')
  const employment3 = localStorage.getItem('employment3')

  return (
    <div>
      <Detail data={employment1} />
      <Detail data={employment2} />
      <Detail data={employment3} />
    </div>
  )
}

export default Compare
