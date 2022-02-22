import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CompareItem from "../../components/CompareItem";
import check from "../../static/icons/checked.svg";
import unchecked from "../../static/icons/unchecked.svg";

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
    <div>
      <header>
        <h2>공고 비교 리스트</h2>
        <input
          type="text"
          placeholder="제목을 검색할 수 있어요"
          value={text}
          onChange={onChange}
        />
        <button type="button" onClick={onDelete}>
          삭제
        </button>
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
              <th>공고1</th>
              <th>공고2</th>
              <th>공고3</th>
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
    </div>
  );
}

export default CompareList;
