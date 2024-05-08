import styled from "styled-components";
import Oringe from "../components/byDevway/oringe";
import Chelitalk from "../components/byDevway/chelitalk";
import Sagwa from "../components/byDevway/sagwa";
import Header from "../components/Common/Header";
import Sidebar from "../components/Common/Sidebar";

function byDevway() {
  return (
    <ByDevContainer>
      <SidebarContent>
        <Sidebar />
      </SidebarContent>
      <MainContent>
        <Header />
        <Info>DEVWAY 소스를 활용해 만든 멋진 서비스들을 소개할게요!</Info>
        <Body>
          <Oringe />
          <Chelitalk />
          <Sagwa />
        </Body>
        <Footer>QR코드를 통해 APK 파일을 다운로드 할 수 있습니다.</Footer>
      </MainContent>
    </ByDevContainer>
  );
}

export default byDevway;

// Styled components
const ByDevContainer = styled.div`
  display: flex;
  height: 100%; // 전체 화면 높이 사용
`;

const SidebarContent = styled.div`
  width: 200px; // 사이드바의 고정 너비
  height: 100%; // 전체 높이
  margin-top: 90px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향 배치
  align-items: center; // 가운데 정렬
  width: calc(100% - 200px); // 사이드바 너비를 제외한 나머지 공간 사용
  margin-top: 50px;
  padding-right: 70px;
`;

const Info = styled.h3`
  color: black;
  margin-top: 40px;
  margin-right: 140px;
`;

const Body = styled.div`
  width: 80%;
  display: flex;
  justify-content: center; // 내용을 가운데 정렬
  align-items: center; // 내용을 세로 중앙 정렬
  margin-top: 25px; // 상하 마진 설정
  margin-bottom: 30px; // 하단에 마진 설정
`;

const Footer = styled.div`
  color: black;
  text-align: center; // 텍스트 가운데 정렬
  width: 100%; // 전체 너비 사용
  margin-top: auto; // 하단에 자동 마진
  padding: 20px 0; // 패딩 설정
`;
