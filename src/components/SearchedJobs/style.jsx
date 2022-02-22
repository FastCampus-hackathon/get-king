import styled from "styled-components";

export const SearchedList = styled.ul`
  border-bottom: 1px solid #141414;
  width: 100%;

  li {
    width: 865px;
    height: 92px;
    display: flex;
    justify-content: space-between;
    color: #383838;
    .info_left {
      display: flex;
      flex-direction: column;
      width: 800px;

      .company_name {
        font-size: 14px;
        margin-bottom: 4px;
      }
      .flex_wrapper {
        width: 650px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        .job_salary {
          width: 120px;
        }
        .experience {
          width: 90px;
        }
      }
      .job_tag {
        height: 20px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
        font-size: 14px;
        color: #8a8a8a;
      }
      .job_title {
        display: block;
        font-size: 16px;
        color: #00d3ab;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 350px;
      }
    }
    .info_right {
      margin-top: 8px;
      display: flex;
      justify-content: right;
      flex-direction: column;
      width: 150px;
      h4 + h4 {
        margin-bottom: 4px;
      }
      div {
        .dead_line {
          display: inline-block;
        }
        .pick_btn {
          vertical-align: middle;
          margin-left: 8px;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  li + li {
    margin: 24px 0;
  }
`;
