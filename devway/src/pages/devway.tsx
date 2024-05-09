import styled from "styled-components";

import Header from "../components/Common/Header";

function devway() {
  return (
    <DevwayContainer>
      <Header />
    </DevwayContainer>
  );
}

export default devway;

const DevwayContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;
