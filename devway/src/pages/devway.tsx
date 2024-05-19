import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Landing1 from "@/components/landing/Landing1";
import Landing2 from "@/components/landing/Landing2";
import Landing3 from "@/components/landing/Landing3";
import Landing4 from "@/components/landing/Landing4";
import Landing5 from "@/components/landing/Landing5";

const DevWay: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [fullpageApi, setFullpageApi] = useState<any>(null);

  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        credits={{ enabled: false }} // credits 속성 추가
        navigation={true} // navigation 활성화
        navigationPosition="right" // 네비게이션 위치 설정
        afterLoad={(origin, destination) => {
          setActiveSection(destination.index);
        }}
        render={({ fullpageApi: api }) => {
          if (!fullpageApi && api) {
            setFullpageApi(api);
          }
          return (
            <Container>
              <div className="section">
                <Landing1 isActive={activeSection === 0} />
              </div>
              <div className="section">
                <Landing2 isActive={activeSection === 1} />
              </div>
              <div className="section">
                <Landing3 isActive={activeSection === 2} />
              </div>
              <div className="section">
                <Landing4 isActive={activeSection === 3} />
              </div>
              <div className="section">
                <Landing5 isActive={activeSection === 4} />
              </div>
            </Container>
          );
        }}
      />
      <ScrollGuide>↓</ScrollGuide>
      {fullpageApi && (
        <TopButton onClick={() => fullpageApi.moveTo(1, 0)}>↑</TopButton>
      )}
      <style>
        {`
          .fp-watermark {
            display: none !important;
          }
          /* 네비게이션 스타일 커스터마이즈 */
          #fp-nav {
            top: 50%;
            transform: translateY(-50%);
          }
          #fp-nav ul {
            right: 10px; /* 스크롤 바 위치 조정 */
          }
          #fp-nav ul li a span,
          #fp-nav ul li .fp-tooltip {
            background: #6FBD72; /* 네비게이션 점 색상 */
          }
        `}
      </style>
    </>
  );
};

export default DevWay;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
  background: linear-gradient(
    to bottom,
    #ffffff 22%,
    #ffd147 61%,
    #ff8617 100%
  );
  .section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollGuide = styled.div`
  position: fixed;
  bottom: 0vh;
  left: 47vw;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #ff8617;
  animation: ${bounce} 2s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999; /* z-index를 높게 설정하여 항상 위에 보이도록 함 */

  &::after {
    content: "Scroll down";
    font-size: 1rem;
    margin-top: 10px;
  }
`;

const TopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #ff8617;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }

  z-index: 9999; /* z-index를 높게 설정하여 항상 위에 보이도록 함 */
`;
