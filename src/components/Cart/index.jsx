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
  bottom: 130px;
  left: 30px;
  color: #4876ef;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 15px;
`;

const ICON = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4876ef;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;

  img {
    display: block;
    width: 60px;
    height: 60px;
  }
`;
