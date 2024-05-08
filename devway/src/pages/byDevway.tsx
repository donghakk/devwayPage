import styled from "styled-components";
import Oringe from "../components/byDevway/oringe";
import Chelitalk from "../components/byDevway/chelitalk";

function byDevway() {
  // ts

  return (
    // html
    <Intro>
      <h2>DEVWAY 소스를 활용해 만든 서비스가 세상에 나왔어요!</h2>

      <Body>
        <Oringe />
        <Chelitalk />
        <div className="content"></div>
      </Body>

      <Footer>QR코드를 통해 APK 파일을 다운로드 할 수 있습니다.</Footer>
    </Intro>
  );
}

export default byDevway;

// css
const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  h2 {
    color: black;
  }
`;

const Body = styled.div`
  width: 80%;
  display: flex;
  margin: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.h2`
  color: black;
  margin-top: 100px;
  margin-bottom: 100px;
`;
