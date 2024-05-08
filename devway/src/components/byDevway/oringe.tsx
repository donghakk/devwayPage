import styled from "styled-components";
import logo_oringe from "../../assets/img/logo_oringe.svg";

function Oringe() {
  return (
    <Content>
      <img src={logo_oringe} />
      <div>
        <div className="title">오린지</div>
        <div className="date">2024.05.12</div>
      </div>
    </Content>
  );
}

export default Oringe;

const Content = styled.div`
  border: 1px solid rgba(255, 255, 255);
  padding: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  margin: 50px;
  width: 300px;
  height: 310px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
  }

  div .title {
    margin-top: 30px;
    margin-bottom: 10px;
    color: black;
    font-weight: bold;
    font-size: 25px;
  }

  div .date {
    font-weight: bold;
    font-size: 20px;
    color: #ffd600;
  }
`;
