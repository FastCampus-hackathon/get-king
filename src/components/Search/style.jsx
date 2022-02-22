import styled from 'styled-components'

export const SearchEngine = styled.div`
  display: inline-flex;
  border: 1px solid #c4c4c4;
  border-radius: 24px;
  vertical-align: middle;
  margin: 50px 0 8px 60px;

  img {
    position: relative;
    bottom: 1px;
    left: 16px;
    display: block;
  }
  input {
    display: block;
    width: 640px;
    height: 40px;
    padding-left: 24px;

    &::placeholder {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3;
      color: #8a8a8a;
    }
  }

  ul {
    display: flex;
    padding: 7px 12px;
    border-left: 1px solid #c4c4c4;
    li {
      display: block;
      padding: 6px 12px 4px;
      border-radius: 20px;
      list-style: none;
      vertical-align: middle;

      &:first-child {
        background-color: #383838;
        color: white;
      }
    }
  }
`
