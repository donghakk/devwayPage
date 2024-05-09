import styled from "styled-components";

import store from "../../assets/img/store.svg";
import Releasenote from "./ReleaseNote";

function DevwayStore() {
  return (
    <StoreWrapper>
      <img src={store} alt="어닝" />
      <Store>
        <Releasenote />
      </Store>
    </StoreWrapper>
  );
}
export default DevwayStore;

const StoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 50px;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: 900px;
    display: block;
    z-index: 2;
  }
`;

const Store = styled.div`
  background-color: #f7f7f7;
  width: 700px;
  height: 500px;
  position: absolute;
  top: 50px;
  z-index: 1;
  margin-right: 20px;
  margin-top: 100px;
`;
