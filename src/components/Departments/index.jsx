import React from 'react'
import { DepartmentsList } from './style'
import Jobs from '../Jobs'
import { useState } from 'react'
import { useEffect } from 'react'

const Departments = () => {
  const [showJobs, setShowJobs] = useState(false)

  useEffect(() => {}, [showJobs])
  return (
    <>
      {showJobs ? (
        <Jobs />
      ) : (
        <>
          <DepartmentsList>
            <h2>직무별</h2>
            <li>전체</li>
            <li>기획·전략</li>
            <li>마케팅·홍보·조사</li>
            <li>회계·세무·재무</li>
            <li>인사·노무·HRD</li>
            <li>총무·법무·사무</li>
            <li
              onClick={() => {
                setShowJobs(true)
              }}
            >
              IT개발·데이터
            </li>
            <li>영업·판매·무역</li>
            <li>고객상담·TM</li>
            <li>구매·자재·물류</li>
            <li>운전·운송·배송</li>
            <li>서비스</li>
            <li>생산</li>
            <li>건설·건축</li>
            <li>의료</li>
            <li>연구·R&D</li>
            <li>미디어·문화·스포츠</li>
            <li>금융·보험</li>
            <li>공공·복지</li>
          </DepartmentsList>
        </>
      )}
    </>
  )
}

export default Departments
