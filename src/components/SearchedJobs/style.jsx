import styled from "styled-components"

export const SearchedList = styled.ul`
  border: 1px solid red;
  margin: 68px;

  li {
    border: 2px solid green;
    width: 698px;
    display: flex;
    justify-content: space-between;

    .company_name {
      font-size: 16px;
      color: #383838;
    }
    .flex_wrapper {
      width: 800px;
      display: flex;
      h4 + h4 {
        margin: 0 16px;
      }
      .job_tag {
        display: block;
        font-size: 20px;
        color: #00d3ab;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 400px;
        height: 20px;
      }
    }
  }
  li + li {
    margin: 16px 0;
  }
`
