import styled from "styled-components"

export const SearchedList = styled.ul`
  margin: 68px;

  li {
    width: 865px;
    height: 92px;
    display: flex;
    justify-content: space-between;
    .info_left {
      display: flex;
      flex-direction: column;
      width: 800px;

      .company_name {
        font-size: 16px;
        color: #383838;
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
      }
      .job_title {
        display: block;
        font-size: 20px;
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
    }
  }
  li + li {
    margin: 24px 0;
  }
`
