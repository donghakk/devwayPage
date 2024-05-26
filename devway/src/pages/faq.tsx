import styled from "styled-components";
import { useState } from "react";

import Header from "../components/Common/Header";
import FAQList from "../components/Faq/FAQList";
import FAQModal from "@/components/Faq/FAQModal";

function Faq() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FAQContainer>
      {isModalOpen && (
        <ModalWrapper>
          <FAQModal onClose={closeModal} />
        </ModalWrapper>
      )}
      <MainContent>
        <Header name="FAQ" />
        <FAQList openModal={openModal} />
      </MainContent>
    </FAQContainer>
  );
}

export default Faq;

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

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
`;
