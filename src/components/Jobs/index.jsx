import axios from "axios";
import React from "react";
import SearchedJobs from "../SearchedJobs";
import { JobList } from "./style";
import { setAnnouncement } from "../../reducers/announcement";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = [
    "프론트엔드",
    "백엔드/서버개발",
    "SE(시스템엔지니어)",
    "QA/테스터",
    "IT컨설팅",
    "FAE",
    "GM(게임운영)",
    "DBA",
    "CPO",
    "CISO",
    "퍼블리셔",
    "유지보수",
    "웹마스터",
    "웹개발",
    "앱개발",
    "보안컨설팅",
    "데이터엔지니어",
    "데이터분석가",
    "기술지원",
    "게임개발",
  ];

  const getJobsByKeyword = async e => {
    const keyword = e.target.innerText;
    const {
      data: {
        jobs: { job },
      },
    } = await axios.post("https://saramserver.herokuapp.com/saram", {
      keywords: keyword,
      sort: "dd",
    });
    dispatch(setAnnouncement(job));
  };
  return (
    <>
      <Wrapper>
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
            );
          })}
        </JobList>
        <SearchedJobs />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default Jobs;
