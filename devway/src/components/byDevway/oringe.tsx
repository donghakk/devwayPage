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
  margin: 30px;
  width: 250px;
  height: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
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
`;
