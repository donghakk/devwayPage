import React from "react";
import styled from "styled-components";
import Landing1 from "../components/landing/Landing1";
import Landing3 from "../components/landing/Landing3";
import Landing2 from "../components/landing/Landing2";
import Landing4 from "../components/landing/Landing4";
import Landing5 from "../components/landing/Landing5";

function DevWay() {
  return (
    <Container>
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />
    </Container>
  );
}

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
`;
