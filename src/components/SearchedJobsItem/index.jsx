import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import plus from "../../static/icons/pplus.svg";
import activePlus from "../../static/icons/active-plus.svg";
import more from "../../static/icons/more.svg";
import activeMore from "../../static/icons/active-more.svg";

function SearchedJobsItem({ job, handleClick }) {
  const a = job.position.location.name?.split(",");
  return (
    <List key={job.id}>
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
          <h4 className="dead_line hi" textAlign="right">
            {dayjs(new Date(job["expiration-timestamp"] * 1000)).format(
              "~MM/DD(dd)"
            )}
          </h4>
        </div>
        <div className="hiGroup">
          <h4 className="hi">{job.position["job-type"].name}</h4>
          <h4 className="hi">
            {a ? a[a.length - 1].replace("&gt;", " ") : " "}
          </h4>
          <div className="btn-group">
            <div className="plus-btn">
              <div className="bubble">비교함 담기</div>
              <img src={plus} alt="" className="plus" />
              <img
                src={activePlus}
                alt=""
                className="activePlus"
                onClick={() => {
                  handleClick(job);
                }}
              />
            </div>
            <div className="more-btn">
              <div className="bubble">자세히 보기</div>
              <img src={more} alt="" className="more" />
              <img src={activeMore} alt="" className="activeMore" />
            </div>
          </div>
        </div>
      </div>
    </List>
  );
}

export default SearchedJobsItem;

const List = styled.li`
  .bubble {
    display: none;
    width: 80px;
    padding: 4px 0;
    color: #4876ef;
    font-size: 14px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px #00000026;
  }

  .btn-group {
    display: flex;
  }

  .plus-btn {
    position: relative;
    left: 30px;
    bottom: 4px;
    width: 30px;
    margin-right: 8px;
    cursor: pointer;
    .activePlus {
      display: none;
    }
  }

  .more-btn {
    position: relative;
    left: 40px;
    bottom: 2px;
    cursor: pointer;
    .activeMore {
      display: none;
    }
  }

  .plus-btn:hover {
    .bubble {
      position: absolute;
      bottom: 30px;
      left: -25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .plus {
      display: none;
    }

    .activePlus {
      display: block;
    }
  }

  .more-btn:hover {
    .bubble {
      position: absolute;
      bottom: 35px;
      left: -34px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .more {
      display: none;
    }

    .activeMore {
      display: block;
    }
  }

  .hiGroup {
    display: flex;

    h4 {
      display: block;
      margin-right: 8px;
    }
  }

  .info_right {
    display: flex;
  }
`;
