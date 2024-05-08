import styled from "styled-components";
import logo_sagwa from "../../assets/img/logo_sagwa.svg";

function Sagwa() {
  return (
    <Content>
      <img src={logo_sagwa} />
      <div>
        <div className="title">사과</div>
        <div className="date">2024.05.14</div>
      </div>
    </Content>
  );
}

export default Sagwa;

const Content = styled.div`
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

  img {
    width: 130px;
    height: 130px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div .title {
    margin-top: 35px;
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
`;
