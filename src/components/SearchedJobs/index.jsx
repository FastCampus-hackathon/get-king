import React from "react"

const SearchedJobs = ({ jobsData }) => {
  console.log("잡데이터: ", jobsData)
  return (
    <ul>
      {jobsData &&
        jobsData.map((job, index) => {
          return <li key={job.id}>기업명</li>
        })}
    </ul>
  )
}

export default SearchedJobs
