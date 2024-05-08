import styled from "styled-components";
import logo_chelitalk from "../../assets/img/logo_chelitalk.svg";
import qr from "../../assets/img/qr.svg";

function Chelitalk() {
  return (
    <Content>
      <img className="logo" src={logo_chelitalk} />
      <img className="hover-image" src={qr} />
      <div>
        <div className="title">체리톡</div>
        <div className="date">2024.05.08</div>
      </div>
    </Content>
  );
}

export default Chelitalk;

const Content = styled.div`
  position: relative;
  border: 1px solid rgba(255, 255, 255);
  padding: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  margin: 30px;
  width: 250px;
  height: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 150px;
    height: 150px;
    position: relative;
    z-index: 1; /* 로고 이미지가 다른 이미지 위에 보이도록 함 */
  }

  .hover-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2; /* 다른 이미지를 로고 이미지 아래에 배치 */
    opacity: 0;
    transition: all 0.5s ease;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div .title {
    margin-top: 15px;
    margin-bottom: 5px;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }

  div .date {
    font-weight: bold;
    font-size: 15px;
    color: #ffc30d;
  }

  /* 마우스 호버 시 다른 이미지 표시 */
  &:hover .hover-image {
    opacity: 1;
    transform: scale(0.6);
  }

  /* 마우스 호버 시 컨테이너 블러 효과 */
  &:hover {
    filter: blur(2px);
  }
`;
