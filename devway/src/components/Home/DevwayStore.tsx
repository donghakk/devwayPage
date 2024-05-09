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
  margin-top: 100px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
  margin-bottom: 30px;
`;
