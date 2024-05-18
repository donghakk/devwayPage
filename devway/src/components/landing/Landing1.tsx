import React from "react";
import styled from "styled-components";
import Header from "@/components/Common/Header";
import LeftChat1 from "@/assets/img/landing/Left_chat_bubble.svg";
import LeftChat2 from "@/assets/img/landing/Left_chat_bubble1.svg";
import RightChat1 from "@/assets/img/landing/Right_chat_bubble.svg";
import RightChat2 from "@/assets/img/landing/Right_chat_bubble1.svg";
import Helix1 from "@/assets/img/landing/Helix1.png";
import Helix2 from "@/assets/img/landing/Helix2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const FixedHeader = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #fff; Header 배경색, 필요에 따라 변경 */
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50vw;
  margin-top: 20px; /* h1과의 간격 조정 */
  position: relative;
  z-index: 1; /* ChatContainer의 z-index 설정 */
`;

const ChatBubble = styled.div<{ isLeft: boolean; marginOffset: string }>`
  display: flex;
  justify-content: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
  margin-left: ${(props) => (props.isLeft ? props.marginOffset : "0")};
  margin-right: ${(props) => (props.isLeft ? "0" : props.marginOffset)};
  position: relative;
`;

const Image = styled.img`
  height: 77px;
  margin: 5px;
`;

const HelixImage = styled.img<{ isLeft: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.isLeft ? "left: -150px;" : "right: -150px;")}
  transform: translateY(-50%);
  z-index: 2; /* Helix 이미지를 더 높은 z-index로 설정 */
`;

const Landing1 = () => {
  const images = [
    { src: LeftChat1, alt: "채팅1", marginOffset: "50px" },
    { src: RightChat1, alt: "채팅2", marginOffset: "30px" },
    { src: LeftChat2, alt: "채팅3", marginOffset: "0px" },
    { src: RightChat2, alt: "채팅4", marginOffset: "10px" },
  ];

  return (
    <Container>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <Section>
        <ChatContainer>
          <HelixImage src={Helix1} alt="Helix1" isLeft={true} />
          <HelixImage src={Helix2} alt="Helix2" isLeft={false} />
          {images.map((image, index) => (
            <ChatBubble
              key={index}
              isLeft={index % 2 === 0}
              marginOffset={image.marginOffset}
            >
              <Image src={image.src} alt={image.alt} />
            </ChatBubble>
          ))}
        </ChatContainer>
      </Section>
    </Container>
  );
};

export default Landing1;
