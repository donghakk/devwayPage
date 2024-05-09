import styled, { keyframes } from "styled-components";

const Flowbar = () => {
  return (
    <Container>
      <Flowbox></Flowbox>
    </Container>
  );
};

export default Flowbar;

const Container = styled.div`
  margin: 100px 0 0 0;
`;

const flowing = keyframes`
0%{
    transform: translate3d(0,0,0)
}
100%{
    transform: translate3d(-50%,0,0)
}
`;

const Flowbox = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const FlowWrap = styled.div`
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`;

const Flow = styled.div`
  animaiton: ${flowing} 8s lienar infinite;
  span {
    display: inline-block;
    font-weight: bold;
    padding: 0 20px;
  }
`;
