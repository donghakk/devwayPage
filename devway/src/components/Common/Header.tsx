import styled from "styled-components";
import NavBar from "../Common/Navbar";

import devway from "../../assets/img/devway.svg";

function Header() {
  return (
    <HeaderContainer>
      <img src={devway} alt="devway logo" />
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
