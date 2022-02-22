import styled from "styled-components"

export const JobList = styled.ul`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 900px;

  li {
    cursor: pointer;
    flex-basis: 15%;
    padding: 5px;
  }
`
