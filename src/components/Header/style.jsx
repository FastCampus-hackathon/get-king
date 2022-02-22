import styled from 'styled-components'

export const Head = styled.div`
  font-size: 16px;
  height: 40px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;

  div {
    display: flex;
    div {
      img {
        position: relative;
        top: 29px;
        width: 15px;
        height: 15px;
        display: block;
        margin-right: 16px;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      display: block;
      padding-right: 8px;
    }
  }

  ul {
    display: flex;
    padding: 0;

    li {
      display: block;
      padding: 10px 16px;
      list-style: none;

      &:first-child {
        color: #4876ef;
        border-bottom: 2px solid #4876ef;
      }
    }
  }
`
