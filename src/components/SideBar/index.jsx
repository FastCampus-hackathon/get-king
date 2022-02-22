import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bell from "../../static/icons/bell.svg";
import axios from "axios";
import { Modal } from "../Modal";

function getList(compList) {
  switch (compList.length) {
    case 3:
      return compList.map((item, idx) => <List item={item} key={idx} />);
    case 2:
      return (
        <>
          {compList.map((item, idx) => (
            <List item={item} key={idx} />
          ))}
          <DefaultList />
        </>
      );
    case 1:
      return (
        <>
          {compList.map((item, idx) => (
            <List item={item} key={idx} />
          ))}
          <DefaultList />
          <DefaultList />
        </>
      );
    default:
      return (
        <>
          <DefaultList />
          <DefaultList />
          <DefaultList />
        </>
      );
  }
}

const DefaultList = () => {
  return (
    <li className="default">
      <img src={bell} alt="add" />
    </li>
  );
};

const List = ({ item }) => {
  const [text, setText] = useState("");

  const handleText = e => {
    setText(e.target.value);
  };

  return (
    <li>
      <div className="header">
        <h3 className="company-name">{item.company.detail.name}</h3>
        <img src={bell} alt="close" />
      </div>
      <strong className="job">{item.position["job-mid-code"].name}</strong>
      <div className="info">
        <span className="condition">{item.position["job-type"].name}</span>
        <span className="location">
          {item.position.location.name
            .replace(/&lt;/g, "")
            .replace(/&gt;/g, "")}
        </span>
      </div>
      <span className="date">
        ~
        {dayjs(new Date(item["expiration-timestamp"] * 1000)).format(
          "MM월DD일"
        )}
      </span>
      <input type="text" value={text} onChange={handleText} />
    </li>
  );
};

const SideBar = () => {
  const { compList } = useSelector(state => state.comp);

  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const createListSet = useCallback(() => {
    axios.post("https://saramserver.herokuapp.com/set/create", {
      name: "할만한데?",
      ids: ["50594238", "49393024", "23433334"],
    });
  }, []);

  return (
    <>
      <Container>
        <div className="title">
          <h2>📌 비교할 공고를 담아주세요</h2>
          <span>최대 3개까지 가능해요 👀</span>
        </div>

        <div className="wrap">
          <ol>{getList(compList)}</ol>
        </div>

        <div className="button-group">
          <button className="save" onClick={handleToggle}>
            저장하기
          </button>
          <button className="compare">공고 비교하기</button>
        </div>
      </Container>
      <Modal
        icon="bell"
        open={isToggle}
        title="비교세트를 저장하시겠습니까?"
        subMessage="확인을 누르시면 저장되고 계속 진행합니다."
        onClick={createListSet}
        onClose={handleToggle}
      >
        저장
      </Modal>
    </>
  );
};

export default SideBar;

const Container = styled.div`
  position: fixed;
  top: 107px;
  right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;
  padding: 12px;
  background-color: #fff;
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
      color: ${({ theme }) => theme.colors.gray2};
    }
  }

  .wrap {
    width: 250px;
    height: 518px;
    margin-bottom: 16px;

    ol {
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 250px;
        padding: 12px;
        border: 1px solid ${({ theme }) => theme.colors.gray4};
        border-radius: 4px;
        font-size: ${({ theme }) => theme.fontSizes.footnote2};
        color: ${({ theme }) => theme.colors.gray1};

        &.default {
          justify-content: center;
          align-items: center;
          height: 158px;
          background-color: #f7f7f7;

          img {
            width: 48px;
            height: 48px;
          }
        }

        .header {
          position: relative;

          img {
            position: absolute;
            right: 0;
            top: 0;
          }
        }

        .job {
          font-size: ${({ theme }) => theme.fontSizes.footnote1};
          color: ${({ theme }) => theme.colors.blue};
          font-weight: 600;
        }

        .info {
          display: flex;
          gap: 8px;
        }

        input {
          width: 100%;
          height: 40px;
          padding: 0 10px;
          border-radius: 4px;
          border: 1px solid ${({ theme }) => theme.colors.lightBlue};
        }
      }
    }
  }

  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    button {
      display: inline-block;
      height: 34px;
      padding: 8px 16px;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      border-radius: 24px;
      font-size: ${({ theme }) => theme.fontSizes.footnote2};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.blue};

      &.compare {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  @media (min-height: 800px) {
    top: 127px;
  }

  @media (min-height: 900px) {
    top: 147px;
  }
`;
