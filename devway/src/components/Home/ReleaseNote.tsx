import styled from "styled-components";

import store from "../../assets/img/store.svg";

function ReleaseNote() {
  return (
    <Container>
      <StoreWrapper>
        <img src={store} alt="어닝" />
        <Store />
      </StoreWrapper>
      <h1>아미러</h1>
    </Container>
  );
}
export default ReleaseNote;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 800px;
  }
`;

const Store = styled.div`
  background-color: #f7f7f7;
  width: 700px;
  height: 500px;
`;
