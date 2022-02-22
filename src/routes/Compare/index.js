import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

const CompanyName = ({ item }) => {
  return <div style={{ fontSize: "16px" }}>{item.company.detail.name}</div>;
};

const Job = ({ item }) => {
  return (
    <div style={{ fontSize: "16px" }}>{item.position["job-mid-code"].name}</div>
  );
};

const Industry = ({ item }) => {
  return (
    <div style={{ fontSize: "16px" }}>{item.position["industry"].name}</div>
  );
};

const Experience = ({ item }) => {
  return (
    <div style={{ fontSize: "16px" }}>
      {item.position["experience-level"].name}
    </div>
  );
};

const Location = ({ item }) => {
  return (
    <div style={{ fontSize: "16px" }}>
      {item.position.location.name.replace(/&lt;/g, "").replace(/&gt;/g, "")}
    </div>
  );
};

const ItemDate = ({ item }) => {
  return (
    <div style={{ fontSize: "16px" }}>
      ~{dayjs(new Date(item["expiration-timestamp"] * 1000)).format("MM월DD일")}
    </div>
  );
};

const Salary = ({ item }) => {
  return <div style={{ fontSize: "16px" }}>{item.salary.name}</div>;
};

const ItemMemo = ({ item }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://saramserver.herokuapp.com/memo/${item.id}`
      );

      setText(response.data.text);
    }

    fetchData();
  }, [item]);

  return <div style={{ fontSize: "16px" }}>{text}</div>;
};

const URL = ({ item }) => {
  return (
    <div className="url" style={{ fontSize: "16px" }}>
      <Link to={item.url}>{item.company.detail.name}</Link>
    </div>
  );
};

const Compare = () => {
  const { compList, compListName } = useSelector(state => state.comp);
  const [text, setText] = useState(compListName);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(compList.map(el => el.id));
  }, [compList]);

  const createSet = async () => {
    compList.length === 3 &&
      (await axios.post("https://saramserver.herokuapp.com/set/create", {
        name: text,
        ids: arr,
      }));
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            value={text}
            onChange={handleChange}
          />
          <button onClick={createSet}>저장하기</button>
        </div>
        <div className="content">
          <div className="name">
            <div className="title">
              <h3>기업명</h3>
              <span>homepage</span>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => (
                  <CompanyName item={item} key={idx} />
                ))
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <CompanyName item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <CompanyName item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>직무</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <Job item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <Job item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <Job item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>산업분야</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <Industry item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <Industry item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <Industry item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>경력조건</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => (
                  <Experience item={item} key={idx} />
                ))
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <Experience item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <Experience item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>지역</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <Location item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <Location item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <Location item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>마감일</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <ItemDate item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <ItemDate item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <ItemDate item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>연봉</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <Salary item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <Salary item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <Salary item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>메모</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <ItemMemo item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <ItemMemo item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <ItemMemo item={item} key={idx} />
                  ))}
                  <div></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </div>

          <div className="name">
            <div className="title">
              <h3>상세 페이지</h3>
            </div>
            <div className="comp">
              {compList.length === 3 ? (
                compList.map((item, idx) => <URL item={item} key={idx} />)
              ) : compList.length === 2 ? (
                <>
                  {compList.map((item, idx) => (
                    <URL item={item} key={idx} />
                  ))}
                  <div></div>
                </>
              ) : compList.length === 1 ? (
                <>
                  {compList.map((item, idx) => (
                    <URL item={item} key={idx} />
                  ))}
                  <div className="url"></div>
                  <div className="url"></div>
                </>
              ) : (
                <>
                  <div className="url"></div>
                  <div className="url"></div>
                  <div className="url"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Compare;

const Container = styled.div`
  padding: 0 60px 60px;
  margin-top: 24px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    margin-bottom: 24px;

    input {
      width: 360px;
      font-size: 20px;
      line-height: 1.3;
      font-weight: 600;
    }

    button {
      display: inline-block;
      height: 34px;
      padding: 8px 16px;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      border-radius: 24px;
      font-size: ${({ theme }) => theme.fontSizes.footnote2};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    .name {
      width: 100%;
      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60px;
        background-color: ${({ theme }) => theme.colors.lightBlue};

        span {
          display: block;
        }
      }

      .comp {
        display: flex;
        width: 100%;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70px;
          flex: 1;

          &.url {
            font-weight: 600;
            line-height: 2;
            color: ${({ theme }) => theme.colors.blue};
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
