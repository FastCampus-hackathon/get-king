import React, { useState, useEffect } from "react";
import axios from "axios";
import check from "../../static/icons/checked.svg";
import unchecked from "../../static/icons/unchecked.svg";

function CompareItem({ el, i, onChoice, checked }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const getName = async id => {
      const { data } = await axios.get(
        `https://saramserver.herokuapp.com/saram/${id}`
      );
      setNames([...names, data.jobs.job[0].company.detail.name]);
    };

    el.ids.map(el => getName(el));
  }, []);

  console.log(names);

  return (
    <tr>
      <td>
        <div>
          <img
            src={checked[i] === 1 ? check : unchecked}
            alt=""
            id={i + "," + el._id}
            onClick={onChoice}
          />
        </div>
      </td>
      <td>{i + 1}</td>
      <td>{el.name}</td>
      <td>{names[0]}</td>
      <td>{names[1]}</td>
      <td>{names[2]}</td>
    </tr>
  );
}

export default CompareItem;
