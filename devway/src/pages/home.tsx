import styled from "styled-components";

import Header from "../components/Common/Header";
import DevwayStore from "../components/home/DevwayStore";
import People from "../components/home/People";

function home() {
  return (
    <HomeContainer>
      <MainContent>
        <Header name="HOME" />
        <DevwayStore />
        <Footer>
          <People/>
        </Footer>
      </MainContent>
    </HomeContainer>
  );
}

export default home;

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex: 1;
`;

const Footer = styled.footer`
  margin-top: 50px;
  width: 100%;
  margin-bottom: 20px;
`;
