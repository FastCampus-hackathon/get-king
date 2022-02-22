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
import styled from "styled-components";

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
    <Item>
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
    </Item>
  );
}

export default CompareItem;

const Item = styled.tr`
  td {
    text-align: center;
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
`;
