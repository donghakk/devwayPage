import styled from "styled-components";
import NavBar from "../Common/Navbar";
import devway from "../../assets/img/devway.svg";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  name: string;
}

function Header({ name }: NavbarProps) {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <img src={devway} alt="devway logo" onClick={goToHome} />
      <NavBar name={name}/>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 600px;
    cursor: pointer;
    margin-bottom: 30px;
  }
  margin-bottom: 30px;
`;
