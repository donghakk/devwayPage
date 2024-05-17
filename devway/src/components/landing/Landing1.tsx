import React from "react";
import styled from "styled-components";
import Header from "../Common/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FixedHeader = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff; /* Header 배경색, 필요에 따라 변경 */
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-top: 20px; /* h1과의 간격 조정 */
`;

const ChatBubble = styled.div<{ isLeft: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
  padding: 10px;
`;

const Image = styled.img`
  width: 200px; /* 이미지 너비 설정 */
  height: auto;
  margin: 5px;
  border-radius: 10px; /* 필요시 모서리 둥글게 */
`;

const Landing1 = () => {
  const images = [
    { src: "이미지_경로1", alt: "채팅1" },
    { src: "이미지_경로2", alt: "채팅2" },
    { src: "이미지_경로3", alt: "채팅3" },
    { src: "이미지_경로4", alt: "채팅4" },
  ];

  return (
    <Container>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <Section>
        <h1>누구나 내 맘대로 원하는 거 만드는 세상을 만들겠습니다</h1>
        <ChatContainer>
          {images.map((image, index) => (
            <ChatBubble key={index} isLeft={index % 2 === 0}>
              <Image src={image.src} alt={image.alt} />
            </ChatBubble>
          ))}
        </ChatContainer>
      </Section>
    </Container>
  );
};

export default Landing1;
