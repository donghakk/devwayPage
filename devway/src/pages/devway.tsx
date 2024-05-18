import React from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Landing1 from "@/components/landing/Landing1";
import Landing2 from "@/components/landing/Landing2";
import Landing3 from "@/components/landing/Landing3";
import Landing4 from "@/components/landing/Landing4";
import Landing5 from "@/components/landing/Landing5";

const DevWay: React.FC = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      credits={{ enabled: false }} // credits 속성 추가
      render={({ fullpageApi }) => {
        return (
          <Container>
            <div className="section">
              <Landing1 />
            </div>
            <div className="section">
              <Landing2 />
            </div>
            <div className="section">
              <Landing3 />
            </div>
            <div className="section">
              <Landing4 />
            </div>
            <div className="section">
              <Landing5 />
            </div>
          </Container>
        );
      }}
    />
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
  }
`;
