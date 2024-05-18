import styled, { keyframes } from "styled-components";
import Contributors from "./Contributors";

import sumin from "../../assets/profileImg/sumin.jpg";

const Flowbar = () => {
  return (
    <Wrapper>
      <h3>Contributors</h3>
      <BannerContainer>
        <Banner>
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
          <Contributors img={sumin} text="Lee sumin" />
        </Banner>
      </BannerContainer>
    </Wrapper>
  );
};

export default Flowbar;

const Wrapper = styled.div`
  h3 {
    margin-left: 20px;
  }
  margin-top: 200px;
  margin-left: 20px;
`;

const scrollAnimation = keyframes`
from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-10%);
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: auto;
  display: flex;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
  animation: ${scrollAnimation} 20s linear infinite;
  > div {
    flex-shrink: 0;
    margin-right: 50px;
    white-space: nowrap;
  }
`;
