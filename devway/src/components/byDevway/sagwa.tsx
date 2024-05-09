import styled from "styled-components";
import logo_sagwa from "../../assets/img/logo_sagwa.svg";
import qr from "../../assets/img/qr.svg";

function Sagwa() {
  return (
    <Content>
      <img className="logo" src={logo_sagwa} />
      <img className="hover-image" src={qr} />
      <div>
        <div className="title">사과</div>
        <div className="date">2024.05.14</div>
      </div>
    </Content>
  );
}

export default Sagwa;

const Content = styled.div`
  position: relative;
  border: 1px solid rgba(255, 255, 255); // 테두리 색을 일관되게 유지
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

  .logo,
  div {
    transition: filter 0.5s ease;
  }

  .logo {
    width: 150px;
    height: 150px;
    z-index: 1;
  }

  .hover-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 0.5s ease, transform 0s;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
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

  &:hover .logo,
  &:hover div {
    filter: blur(2px);
  }

  &:hover .hover-image {
    opacity: 1;
  }
`;
