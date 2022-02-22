import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../static/icons/receipt.svg";
import styled from "styled-components";

function Cart() {
  const nav = useNavigate();
  return (
    <>
      <div>
        <HI>비교 목록 Go!</HI>
        <ICON
          onClick={() => {
            nav("/compare-list");
          }}
        >
          <img src={icon} alt="" />
        </ICON>
      </div>
    </>
  );
}

export default Cart;

const HI = styled.div`
  position: fixed;
  top: 75px;
  right: 25px;
  color: #4876ef;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 14px;
`;

const ICON = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4876ef;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;

  img {
    display: block;
    width: 30px;
    height: 30px;
  }
`;
