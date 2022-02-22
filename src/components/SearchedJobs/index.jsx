import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { SearchedList } from "./style";
import { useSelector } from "react-redux";
import picked from "../../static/icons/picked.svg";
import styled from "styled-components";
import bell from "../../static/icons/bell.svg";
import unpicked from "../../static/icons/unpicked.png";
import { useDispatch } from "react-redux";
import { addCompItem } from "../../reducers/comp";

const SearchedJobs = () => {
  const [pickedList, setPickedList] = useState([]);
  const jobsData = useSelector(state => state.announcement.announcement);

  dayjs.locale("ko");
  const dispatch = useDispatch();
  const { compList } = useSelector(state => state.comp);

  return (
    <>
      <Container>
        <div className="left">
          <img src={bell} alt="scrap" />
          <strong>스크랩 모아보기</strong>
        </div>

        <div className="right">
          <select name="sort" id="sort">
            <option value="date">마감일순</option>
          </select>
        </div>
      </Container>
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
                      {dayjs(
                        new Date(job["expiration-timestamp"] * 1000)
                      ).format("~MM/DD(dd)")}
                    </h4>
                    <img
                      className="pick_btn"
                      src={pickedList.includes(job.id) ? picked : unpicked}
                      onClick={() => handleClick(job)}
                      alt="icon"
                    />
                    <div className="loc">
                      <h4>{job.position["job-type"].name}</h4>
                      <h4>{a[a.length - 1].replace("&gt;", "/")}</h4>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </SearchedList>
    </>
  );
};

export default SearchedJobs;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin-left: 60px;
  height: 28px;
  margin-bottom: 16px;

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      display: block;
      margin-right: 4px;
      align-self: center;
      margin-bottom: 4px;
    }

    strong {
      display: block;
    }
  }

  .right {
    select {
      width: 80px;
      height: 28px;
      padding: 5px 0 5px 8px;
      border: 1px solid ${({ theme }) => theme.colors.gray3};
      border-radius: 4px;
    }
  }
`;
