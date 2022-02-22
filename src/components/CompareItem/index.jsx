import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import check from "../../static/icons/checked.svg";
import unchecked from "../../static/icons/unchecked.svg";
import {
  resetCompItem,
  addCompItem,
  addCompItemName,
} from "../../reducers/comp";
import { useDispatch } from "react-redux";

function CompareItem({ el, i, onChoice, checked }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = async () => {
    dispatch(resetCompItem());
    el.ids.map(async el => {
      const { data } = await axios.get(
        `https://saramserver.herokuapp.com/saram/${el.id}`
      );

      dispatch(addCompItem(data.jobs.job[0]));
    });
    dispatch(addCompItemName(el.name));
    navigate("/compare");
  };

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
      <td onClick={onClick}>{el.name}</td>
      <td>{el.ids[0]?.name}</td>
      <td>{el.ids[1]?.name}</td>
      <td>{el.ids[2]?.name}</td>
    </tr>
  );
}

export default CompareItem;
