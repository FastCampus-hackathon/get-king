import styled from "styled-components";

export const DepartmentsList = styled.ul`
  margin: 68px;
  border-bottom: 1px solid #141414;
  h2 {
    position: absolute;
    top: 135px;
    left: 95px;
    display: block;
    font-size: 22px;
    font-weight: 700;
  }
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 900px;
  margin-left: 60px;
  margin-top: 30px;
  padding: 32px;

  li {
    cursor: pointer;
    flex-basis: 15%;
    padding: 5px;
    font-size: 14px;

    &:nth-child(2) {
      color: #4876ef;
    }
  }
`;
