import styled from "styled-components";
import Header from "../components/Common/Header";

function byDevway() {
  return (
    <Container>
      <div className="headerContainer">
        <Header />
      </div>
    </Container>
  );
}

export default byDevway;

const Container = styled.div`
  width: 100%;
  .headerContainer {
    width: 100%;
    height: 100px;
    background-color: red;
  }
`;
