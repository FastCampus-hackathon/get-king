import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mark from "../../static/icons/mark.svg";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

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
  const [name, setName] = useState(false);
  const [job, setJob] = useState(false);
  const [ind, setInd] = useState(false);
  const [exp, setExp] = useState(false);
  const [loc, setLoc] = useState(false);
  const [date, setDate] = useState(false);
  const [sal, setSal] = useState(false);
  const [memo, setMemo] = useState(false);
  const [url, setUrl] = useState(false);

  const changeName = () => {
    setName(!name);
  };

  const changeJob = () => {
    setJob(!job);
  };

  const changeInd = () => {
    setInd(!ind);
  };

  const changeExp = () => {
    setExp(!exp);
  };
  const changeLoc = () => {
    setLoc(!loc);
  };

  const changeDate = () => {
    setDate(!date);
  };

  const changeSal = () => {
    setSal(!sal);
  };

  const changeMemo = () => {
    setMemo(!memo);
  };

  const changeUrl = () => {
    setUrl(!url);
  };

  const { compList, compListName } = useSelector(state => state.comp);
  const [text, setText] = useState(compListName);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(compList.map(el => el.id));
  }, [compList]);

  const navigate = useNavigate();

  const createSet = async () => {
    compList.length === 3 &&
      (await axios.post("https://saramserver.herokuapp.com/set/create", {
        name: text,
        ids: arr,
      }));

    navigate("/compare-list");
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <h2>공고항목별 비교</h2>
          <button onClick={createSet}>저장하기</button>
        </div>

        <div className="content">
          <div className="name">
            <div className="title">
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                value={text}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="name">
            <div
              className={name ? "title clicked" : "title"}
              onClick={changeName}
            >
              <h3>기업명</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={job ? "title clicked" : "title"}
              onClick={changeJob}
            >
              <h3>직무</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={ind ? "title clicked" : "title"}
              onClick={changeInd}
            >
              <h3>산업분야</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={exp ? "title clicked" : "title"}
              onClick={changeExp}
            >
              <h3>경력조건</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={loc ? "title clicked" : "title"}
              onClick={changeLoc}
            >
              <h3>지역</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={date ? "title clicked" : "title"}
              onClick={changeDate}
            >
              <h3>마감일</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={sal ? "title clicked" : "title"}
              onClick={changeSal}
            >
              <h3>연봉</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={memo ? "title clicked" : "title"}
              onClick={changeMemo}
            >
              <h3>메모</h3>
              <img src={mark} alt="icon" />
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
            <div
              className={url ? "title clicked" : "title"}
              onClick={changeUrl}
            >
              <h3>상세 페이지</h3>
              <img src={mark} alt="icon" />
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
    h2 {
      font-size: 20px;
      font-weight: 700;
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
      input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        margin-left: 30px;
        height: 50px;
        font-size: 20px;
        line-height: 1.3;
        font-weight: 600;
      }
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        background-color: ${({ theme }) => theme.colors.gray4};
        &.clicked {
          background-color: ${({ theme }) => theme.colors.lightGreen};
          &:hover {
            img {
              display: none;
            }
          }
        }
        h3 {
          margin-right: 10px;
        }
        img {
          display: none;
        }
        &:hover {
          img {
            display: block;
          }
        }
        span {
          display: block;
        }
      }
      .comp {
        display: flex;
        width: 100%;
        height: 70px;
        div {
          display: flex;
          align-items: center;
          padding: 0 32px;
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
