import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { SearchedList } from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCompItem, deleteCompItem } from "../../reducers/comp";
import SearchedJobsItem from "../SearchedJobsItem";

const SearchedJobs = () => {
  const { compList } = useSelector(state => state.comp);
  const [pickedList, setPickedList] = useState(compList);
  const jobsData = useSelector(state => state.announcement.announcement);
  console.log("잡데이터: ", jobsData);
  dayjs.locale("ko");
  const dispatch = useDispatch();

  console.log(compList);
  return (
    <SearchedList>
      {jobsData &&
        jobsData.map((job, index) => {
          const handleClick = job => {
            if (pickedList.includes(job.id)) {
              const newPickedList = pickedList.filter(id => {
                return id !== job.id;
              });
              setPickedList(newPickedList);
              dispatch(deleteCompItem(job));
            } else {
              if (compList.length === 3) {
                alert("비교는 최대 3개까지 가능합니다.");
                return;
              } else {
                const newPickedList = [...pickedList, job.id];
                setPickedList(newPickedList);
                dispatch(addCompItem(job));
              }
            }
          };
          // console.log(job?.position.location.name);
          return <SearchedJobsItem job={job} handleClick={handleClick} />;
        })}
    </SearchedList>
  );
};
export default SearchedJobs;
