import styled from "styled-components";

import Header from "../components/Common/Header";
// import DevwayStore from "../components/home/DevwayStore";

function home() {
  return (
    <HomeContainer>
      <MainContent>
        <Header />
        {/* <DevwayStore /> */}
      </MainContent>
    </HomeContainer>
  );
}

export default home;

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-right: 70px;
  margin-bottom: 50px;
`;
