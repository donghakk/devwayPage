import React from "react";
import styled from "styled-components";
import Landing1 from "../components/landing/Landing1";

const DevWay = () => {
  return (
    <Container>
      <Landing1 />
      <Landing1 />
      <Landing1 />
      <Landing1 />
      <Landing1 />
    </Container>
  );
};

export default DevWay;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
`;
