import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import SubTitleImg from "@/assets/img/landing/SubTitle.svg";
import ContentImg from "@/assets/img/landing/Content.svg";

interface LandingProps {
  isActive: boolean;
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedImage = styled.img<{ isActive: boolean; delay: number }>`
  width: ${(props) =>
    props.src === SubTitleImg ? "60%" : "80%"}; /* 이미지에 따라 너비 설정 */
  margin-bottom: ${(props) =>
    props.src === SubTitleImg ? "100px" : "0"}; /* SubTitle의 경우 간격 설정 */
  opacity: 0;
  ${(props) =>
    props.isActive &&
    css`
      animation: ${fadeInUp} 0.5s ease-out ${props.delay}s forwards;
    `}
`;

const Text = styled.div`
  margin-top: 10px;
  text-align: center;
  white-space: pre-line; /* 줄바꿈을 인식하도록 설정 */
  font-size: 16px;
  line-height: 1.5;
`;

const Landing2: React.FC<LandingProps> = ({ isActive }) => {
  const [isSubTitleActive, setIsSubTitleActive] = useState(false);
  const [isContentActive, setIsContentActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const subTitleDelay = 0.0; // SubTitle 애니메이션 지연 시간 없음
      const contentDelay = 0.2; // SubTitle 애니메이션 이후 Content 애니메이션

      const subTitleTimer = setTimeout(() => {
        setIsSubTitleActive(true);
      }, subTitleDelay * 1000);

      const contentTimer = setTimeout(() => {
        setIsContentActive(true);
      }, contentDelay * 1000);

      return () => {
        clearTimeout(subTitleTimer);
        clearTimeout(contentTimer);
      };
    } else {
      setIsSubTitleActive(false);
      setIsContentActive(false);
    }
  }, [isActive]);

  return (
    <Section>
      <AnimatedImage
        src={SubTitleImg}
        alt="SubTitle"
        isActive={isSubTitleActive}
        delay={0.0}
      />
      <AnimatedImage
        src={ContentImg}
        alt="Content"
        isActive={isContentActive}
        delay={0.5}
      />
      <Text>
        “데브웨이”는 간단하게 백엔드 코드를 사용하여 나만의 서비스를 만드는
        개발자의 경험을 향상시킵니다. {"\n"}
        “Devway” improves the code by improving the experience for developers
        who create their own services using a backend.
      </Text>
    </Section>
  );
};

export default Landing2;
