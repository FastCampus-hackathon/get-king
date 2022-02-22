import {
  ModalBackGround,
  ModalBox,
  ContentsWrapper,
  BtnWrapper,
} from "./style";
import bell from "../../static/icons/bell.svg";
import { useSelector } from "react-redux";

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
  const handleClick = async () => {
    compList.length === 3 && (await onClick());
    await onClose();
  };

  return open ? (
    <ModalBackGround>
      <ModalBox>
        <ContentsWrapper>
          <div className="icon-wrapper">{getModalIcon(icon)}</div>
          {title && <strong className="title">{title}</strong>}
          {guide && <div className="guide">{guide}</div>}
          {subMessage && <span className="sub-message">{subMessage}</span>}
        </ContentsWrapper>
        <BtnWrapper className="modal__button-group">
          {onClose && (
            <button className="close-btn" onClick={onClose}>
              닫기
            </button>
          )}
          <button className="call-btn" onClick={handleClick}>
            {children}
          </button>
        </BtnWrapper>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};
