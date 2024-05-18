import styled from "styled-components";

import Header from "../components/Common/Header";
import FAQList from "../components/Faq/FAQList";

function faq() {
  return (
    <FAQContainer>
      <MainContent>
        <Header name="FAQ"/>
        <FAQList/>
      </MainContent>
    </FAQContainer>
  );
}

export default faq;

const FAQContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  flex: 1;
`;


