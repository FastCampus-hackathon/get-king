import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { SearchedList } from "./style";
import { useSelector } from "react-redux";

const SearchedJobs = () => {
  const jobsData = useSelector(state => state.announcement.announcement);
  console.log("잡데이터: ", jobsData);
  dayjs.locale("ko");
  return (
    <SearchedList>
      {jobsData &&
        jobsData.map((job, index) => {
          const a = job.position.location.name.split(",")
          return (
            <li key={job.id}>
              <div className="info_left">
                <h3 className="company_name">{job.company.detail.name}</h3>
                <div className="flex_wrapper">
                  <h4 className="job_title">{job.position.title}</h4>
                  <h4 className="job_salary">{job.salary.name}</h4>
                  <h4 className="experience">
                    {job.position["experience-level"].name}
                  </h4>
                </div>
                <h4 className="job_tag">{job.position["job-code"].name}</h4>
              </div>
              <div className="info_right">
                <h4>
                  {dayjs(new Date(job["expiration-timestamp"] * 1000)).format(
                    "~MM/DD(dd)"
                  )}
                </h4>
                <h4>{job.position["job-type"].name}</h4>
                <h4>{a[a.length - 1].replace("&gt;", "/")}</h4>
              </div>
            </li>
          );
        })}
    </SearchedList>
  );
};

export default SearchedJobs;
