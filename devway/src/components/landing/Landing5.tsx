import React from "react";
import styled from "styled-components";
import buttonimage from "@/assets/img/landing/gitlablink.svg";

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

const Text = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const SubText = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  color: #555;
`;

const GitLabButton = styled.a`
  display: inline-block;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%; /* 이미지의 최대 너비를 부모 요소에 맞게 설정 */
  max-height: 100%; /* 이미지의 최대 높이를 부모 요소에 맞게 설정 */
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); /* 호버 시 이미지 크기를 1.1배로 확대 */
  }
`;

const Landing5: React.FC<LandingProps> = ({ isActive }) => {
  return (
    <Section>
      <Text>데브웨이의 컨트리뷰터가 되어주세요</Text>
      <SubText>Please be our contributor to Devway</SubText>
      <GitLabButton
        href="https://lab.ssafy.com/s10-final/S10P31B201"
        target="_blank"
      >
        <ButtonImage src={buttonimage} alt="GitLab Link" />
      </GitLabButton>
    </Section>
  );
};

export default Landing5;
