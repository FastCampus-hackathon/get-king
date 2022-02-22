import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { SearchedList } from "./style";
import { useSelector } from "react-redux";
import picked from "../../static/icons/picked.svg";
import unpicked from "../../static/icons/unpicked.png";
import { useDispatch } from "react-redux";
import { addCompItem } from "../../reducers/comp";

const SearchedJobs = () => {
  const [pickedList, setPickedList] = useState([]);
  const jobsData = useSelector(state => state.announcement.announcement);

  console.log("잡데이터: ", jobsData);
  dayjs.locale("ko");
  const dispatch = useDispatch();
  const { compList } = useSelector(state => state.comp);
  console.log(compList);

  return (
    <SearchedList>
      {jobsData &&
        jobsData.map((job, index) => {
          const handleClick = job => {
            if (compList.length === 3) {
              alert("비교는 최대 3개까지 가능합니다.");
              return;
            }
            const newPickedList = [...pickedList, job.id];
            setPickedList(newPickedList);

            dispatch(addCompItem(job));
          };
          const a = job.position.location.name.split(",");
          // dispatchEvent(addItem(job))
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
                <div>
                  <h4 className="dead_line">
                    {dayjs(new Date(job["expiration-timestamp"] * 1000)).format(
                      "~MM/DD(dd)"
                    )}
                  </h4>
                  <img
                    className="pick_btn"
                    src={pickedList.includes(job.id) ? picked : unpicked}
                    onClick={() => handleClick(job)}
                    alt="icon"
                  />
                </div>
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
