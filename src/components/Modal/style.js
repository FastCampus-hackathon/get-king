import styled, { keyframes } from "styled-components";

export const ModalFade = keyframes`
  from {
      opacity: 0;
      margin-top: -50px;
  }
  to {
      opacity: 1;
      margin-top: 0;
  }
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 312px;
  min-height: 280px;
  /* width: 312px;
  height: 280px; */
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  animation: ${ModalFade} 0.5s;
  overflow: hidden;
  text-align: center;
  div.modal__button-group {
    position: absolute;
    button {
      position: static;
    }
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon-wrapper {
    margin-top: 30px;

    img {
      width: 50px;
      height: 50px;
    }
  }
  .title {
    display: block;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin-top: 20px;
  }
  .guide {
    display: block;
    font-size: 14px;
    margin-top: 4px;
  }
  .sub-message {
    display: block;
    color: ${({ theme }) => theme.colors.gray2};
    margin-top: 20px;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 30px;
  width: 100%;
  min-width: 312px;
  height: 54px;

  button {
    font-size: 16px;
    color: #fff;
    font-weight: 600;
  }

  .close-btn {
    width: 35%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gray3};
    text-align: center;
    color: #fff;
    font-weight: 400;
  }
  .call-btn {
    width: 65%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue};
    text-align: center;
  }
`;
