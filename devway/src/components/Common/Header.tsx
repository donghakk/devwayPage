import styled from "styled-components";
import NavBar from "../Common/Navbar";
import devway from "../../assets/img/devway.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <img src={devway} alt="devway logo" onClick={goToHome} />
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
