import React from 'react';
import styled from 'styled-components'

const SideBar = () => {
  return (
    <Container>
      <div className='title'>
        <h2>비교할 공고를 담아주세요</h2>
        <span>최대 3개까지 가능해요 👀</span>
      </div>

      <div className='wrap'>
        <ol>
          <li>
            <h3>(주)오누이</h3>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;
  height: 660px;
  padding: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .title {
    margin-bottom: 16px;
    h2 {
      font-size: 14px;
      font-weigt: 400;
      color: #000;
    }

    span {
      font-size: 12px;
      font-weigt: 400;
      color: ${({theme}) => theme.colors.gray2};
    }
  }

  .wrap {
    width: 250px;
    height: 518px;

    ol {
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        width: 250px;
        height: 162px;
        padding: 12px;
        border: 1px solid ${({theme}) => theme.colors.gray4};
        border-radius: 4px;

        .default {
          background-color: #F7F7F7;
        }
      }
    }
  }
`
