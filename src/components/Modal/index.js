import {
  ModalBackGround,
  ModalBox,
  ContentsWrapper,
  BtnWrapper,
} from "./style";
import bell from "../../static/icons/bell.svg";

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
          <button className="call-btn" onClick={onClick}>
            {children}
          </button>
        </BtnWrapper>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};
