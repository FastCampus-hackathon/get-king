import {
  ModalBackGround,
  ModalBox,
  ContentsWrapper,
  BtnWrapper,
} from "./style";
import bell from "../../static/icons/bell.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function getModalIcon(icon) {
  switch (icon) {
    case "bell":
      return <img src={bell} alt="bell icon" />;
    default:
      return null;
  }
}

export const Modal = ({
  open,
  title,
  guide,
  subMessage,
  icon,
  onClose,
  onClick,
  children,
}) => {
  const { compList } = useSelector(state => state.comp);

  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    setArr(compList.map(el => el.id));
  }, [compList]);

  const createSet = async () => {
    compList.length === 3 &&
      (await axios.post("https://saramserver.herokuapp.com/set/create", {
        name: text,
        ids: arr,
      }));
    await onClose();
  };

  return open ? (
    <ModalBackGround>
      <ModalBox>
        <ContentsWrapper>
          <div className="icon-wrapper">
            {icon && getModalIcon(icon)}
            <input
              className="guide"
              type="text"
              value={text}
              onChange={handleChange}
            />
          </div>
          {title && <strong className="title">{title}</strong>}
          {subMessage && <span className="sub-message">{subMessage}</span>}
        </ContentsWrapper>
        <BtnWrapper className="modal__button-group">
          {onClose && (
            <button className="close-btn" onClick={onClose}>
              닫기
            </button>
          )}
          <button className="call-btn" onClick={createSet}>
            {children}
          </button>
        </BtnWrapper>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};
