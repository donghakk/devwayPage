import styled from "styled-components";
import { useState } from "react";

import store from "../../assets/img/store.svg";
import Releasenote from "./ReleaseNote";
import ReleaseModal from "./ReleaseModal";

function DevwayStore() {
  const [selectedItem, setSelectedItem] = useState<Released | null>(null);

  const handleClick = (item: Released) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <StoreWrapper>
      {selectedItem && (
        <ModalWrapper>
          <ReleaseModal item={selectedItem} onClose={closeModal} />
        </ModalWrapper>
      )}
      <img src={store} alt="어닝" />
      <Store>
        <Releasenote onClick={handleClick} />
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
    height: 300px;
    display: block;
    z-index: 2;
    margin-left: 15px; //오른쪽으로 5px 이동
  }
`;

const Store = styled.div`
  background-color: #f7f7f7;
  width: 600px;
  height: 400px;
  position: absolute;
  top: 50px;
  z-index: 1;
  margin-top: 80px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
  margin-bottom: 30px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
`;

interface Released {
  ver: string;
  date: string;
  title: string;
  content: string;
}
