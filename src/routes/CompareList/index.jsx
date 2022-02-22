import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CompareItem from "../../components/CompareItem";
import check from "../../static/icons/checked.svg";
import unchecked from "../../static/icons/unchecked.svg";
import styled from "styled-components";
import search from "../../static/icons/search.svg";
import left from "../../static/icons/left.svg";
import right from "../../static/icons/right.svg";

function CompareList() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const onChange = e => {
    setText(e.target.value);
  };

  const onChoice = e => {
    if (e.target.id === "all") {
      if (selectedList.length !== list.length) {
        setSelectedList(list.map(el => el._id));
        const allCheckeds = list.map(el => 1);
        setChecked(allCheckeds);
        setAllChecked(true);
      }
      if (selectedList.length === list.length) {
        setSelectedList([]);
        const allUnCheckeds = list.map(el => 0);
        setChecked(allUnCheckeds);
        setAllChecked(false);
      }
      return;
    }

    if (checked[Number(e.target.id.split(",")[0])] === 0) {
      checked.splice(Number(e.target.id.split(",")[0]), 1, 1);
      setSelectedList([...selectedList, e.target.id.split(",")[1]]);
    } else {
      checked.splice(Number(e.target.id.split(",")[0]), 1, 0);
      const newList = selectedList.filter(
        el => el !== e.target.id.split(",")[1]
      );
      setSelectedList(newList);
    }
    setAllChecked(false);
  };

  const onDelete = async () => {
    for (let i = 0; i < selectedList.length; i++) {
      const { data } = await axios({
        url: "https://saramserver.herokuapp.com/set/delete",
        data: {
          _id: selectedList[i],
        },
        method: "DELETE",
      });
      setList(data);
    }
    setSelectedList([]);
    setChecked([]);
    setAllChecked(false);
  };

  const getList = async () => {
    const { data } = await axios.get("https://saramserver.herokuapp.com/set");
    setList(data);

    const checkedArray = new Array(data.length).fill(0);
    setChecked(checkedArray);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <List>
      <header>
        <h2>공고 비교 리스트</h2>
        <div>
          <div>
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="제목을 검색할 수 있어요"
              value={text}
              onChange={onChange}
            />
          </div>

          <button type="button" onClick={onDelete}>
            삭제
          </button>
        </div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>
                <div onClick={onChoice}>
                  <img src={allChecked ? check : unchecked} alt="" id="all" />
                </div>
              </th>
              <th>순서</th>
              <th>제목</th>
              <th>공고 1</th>
              <th>공고 2</th>
              <th>공고 3</th>
            </tr>
          </thead>
          <tbody>
            {list.map((el, i) => (
              <CompareItem
                key={el._id}
                el={el}
                i={i}
                onChoice={onChoice}
                setChecked={setChecked}
                checked={checked}
              />
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <img src={left} alt="" />
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <img src={right} alt="" />
      </footer>
    </List>
  );
}

export default CompareList;

const List = styled.div`
  header {
    margin: 43px 0 24px;
    padding: 0 62px;

    h2 {
      font-size: 20px;
      line-height: 1.3;
      font-weight: 600;
      margin-bottom: 16px;
    }

    div {
      position: relative;
      display: flex;
      justify-content: space-between;

      div {
        img {
          position: absolute;
          top: 6px;
          left: 16px;
          display: block;
          width: 20px;
          height: 20px;
        }

        input {
          display: block;
          width: 568px;
          height: 34px;
          padding-left: 44px;
          border: 1px solid #c4c4c4;
          border-radius: 8px;

          &::placeholder {
            font-size: 16px;
            font-weight: 600;
            line-height: 1.3;
          }
        }
      }

      button {
        display: block;
        padding: 8px 16px;
        border: 1px solid #c4c4c4;
        border-radius: 8px;
      }
    }
  }

  main {
    padding: 0 62px;
    margin-bottom: 24px;
    table {
      width: 1158px;
      thead {
        border-bottom: 1px solid #c4c4c4;
        tr {
          th {
            height: 37px;
            &:first-child {
              width: 40px;

              div {
                position: relative;
                top: 4px;
              }
            }

            &:nth-child(2) {
              width: 56px;
            }

            &:nth-child(3) {
              width: 630px;
            }

            &:nth-child(4) {
              width: 144px;
            }

            &:nth-child(5) {
              width: 144px;
            }

            &:nth-child(6) {
              width: 144px;
            }
          }
        }
      }
    }
  }

  footer {
    display: flex;
    margin-left: 555px;

    img {
      display: block;
      margin-right: 8px;
    }

    div {
      display: flex;
      span {
        position: relative;
        top: 2px;
        display: block;
        width: 20px;
        height: 20px;
        font-size: 14px;
      }
    }
  }
`;
