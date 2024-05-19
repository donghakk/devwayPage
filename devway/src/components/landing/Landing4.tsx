import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Sauces1 from "@/assets/img/landing/sauces1.svg";
import Sauces2 from "@/assets/img/landing/sauces2.svg";

interface LandingProps {
  isActive: boolean;
}

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

const fadeInLeft = keyframes`
  from {
    opacity: 0.3;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0.3;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Text = styled.div<{ isActive: boolean }>`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 0;
  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${fadeInUp} 0.3s ease-out forwards;
    `}
`;

const SubText = styled.div<{ isActive: boolean }>`
  margin-bottom: 20px;
  font-size: 18px;
  color: #555;
  opacity: 0;
  position: relative;
  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${fadeInUp} 0.5s ease-out 0.5s forwards;
    `}
`;
const SubTextOrigin = styled.div<{ isActive: boolean }>`
  margin-bottom: 20px;
  font-size: 18px;
  color: #555;
  opacity: 0;
  position: relative;
  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${fadeInUp} 0.5s ease-out 0.5s forwards;
    `}
`;

const StrikeThrough = styled.span<{ isVisible: boolean }>`
  text-decoration: line-through;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 0.5s ease-out forwards;
    `}
`;

const InsertedText = styled.span<{ isVisible: boolean }>`
  opacity: 0;
  color: red;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 0.5s ease-out forwards;
    `}
`;

const Image = styled.img<{
  isActive: boolean;
  animationType: "fadeInRight" | "fadeInLeft";
}>`
  margin-bottom: 0px;
  opacity: 0;
  ${({ isActive, animationType }) =>
    isActive &&
    css`
      animation: ${animationType === "fadeInRight" ? fadeInRight : fadeInLeft}
        0.5s ease-out 1s forwards;
    `}
`;

const Landing4: React.FC<LandingProps> = ({ isActive }) => {
  const [animate, setAnimate] = useState(false);
  const [textChange, setTextChange] = useState(false);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    if (isActive) {
      setAnimate(true);

      // 이미지 애니메이션이 끝난 후 0.5초 뒤에 텍스트 변경 애니메이션 시작
      timer1 = setTimeout(() => {
        setTextChange(true);
      }, 2000); // 이미지 애니메이션이 1.5초, 대기 시간 0.5초 추가 (총 2초)
    } else {
      setAnimate(false);
      setTextChange(false);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isActive]);

  return (
    <Section>
      <Text isActive={animate}>원하는 소스가 없을 땐?</Text>
      {textChange && (
        <SubText isActive={animate}>
          if there is no{" "}
          <StrikeThrough isVisible={textChange}>sauce</StrikeThrough>
          {textChange && (
            <InsertedText isVisible={textChange}> source</InsertedText>
          )}{" "}
          which you want
        </SubText>
      )}
      {!textChange && (
        <SubTextOrigin isActive={animate}>
          if there is no sauce which you want
        </SubTextOrigin>
      )}

      <Image
        src={Sauces1}
        alt="Sauces1"
        isActive={animate}
        animationType="fadeInRight"
      />
      <Image
        src={Sauces2}
        alt="Sauces2"
        isActive={animate}
        animationType="fadeInLeft"
      />
    </Section>
  );
};

export default Landing4;
