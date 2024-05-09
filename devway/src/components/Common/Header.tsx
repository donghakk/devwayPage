import styled from "styled-components";

import devway from "../../assets/img/devway.svg";

function Header() {
  return (
    <HeaderContainer>
      <img src={devway} alt="devway logo" />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
