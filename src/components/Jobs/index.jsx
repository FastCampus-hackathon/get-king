import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import SearchedJobs from '../SearchedJobs'
import { JobList } from './style'

const Jobs = () => {
  const jobs = [
    '프론트엔드',
    '백엔드/서버개발',
    'SE(시스템엔지니어)',
    'QA/테스터',
    'IT컨설팅',
    'FAE',
    'GM(게임운영)',
    'DBA',
    'CPO',
    'CISO',
    '퍼블리셔',
    '유지보수',
    '웹마스터',
    '웹개발',
    '앱개발',
    '보안컨설팅',
    '데이터엔지니어',
    '데이터분석가',
    '기술지원',
    '게임개발',
  ]
  const [jobsData, setJobsData] = useState([])

  useEffect(() => {
    console.log(jobsData)
  }, [jobsData])

  const getJobsByKeyword = async (e) => {
    const keyword = e.target.innerText
    console.log(e.target.innerText)
    const { data } = await axios.post(
      'https://saramserver.herokuapp.com/saram',
      { keywords: keyword, sort: 'dd' }
    )
    console.log(data.jobs)
    setJobsData(data.jobs.job)
  }
  return (
    <>
      <JobList>
        <h2>IT·개발</h2>
        <li>
          <strong>IT개발·데이터</strong>
        </li>
        {jobs.map((job, index) => {
          return (
            <li key={index} onClick={getJobsByKeyword}>
              {job}
            </li>
          )
        })}
      </JobList>
      {jobsData.length > 0 ? <SearchedJobs jobsData={jobsData} /> : null}
    </>
  )
}

export default Jobs
