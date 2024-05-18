import React from "react";
import styled from "styled-components";

interface LandingProps {
  isActive: boolean;
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Landing3: React.FC<LandingProps> = ({ isActive }) => {
  return (
    <Section>
      <h1>Landing Page 3</h1>
    </Section>
  );
};

export default Landing3;
