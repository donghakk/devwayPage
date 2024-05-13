import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";

function Sidebar() {
  const menus = [
    { name: "DEVWAY", path: "/devway" },
    { name: "BY DEVWAY", path: "/bydevway" },
    { name: "PDF GUIDE", path: "" },
  ];

  return (
    <Side>
      {menus.map((menu, index) => (
        <NavLinkStyled className="active" to={menu.path} key={index}>
          <NavbarItem menu={menu} />
        </NavLinkStyled>
      ))}
    </Side>
  );
}

export default Sidebar;

const Side = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  background-color: white;
  padding: 10px 10px;
  width: 160px;
  color: grey;
  text-align: center;

  &:hover {
    color: black;
    font-weight: bold;
    opacity: 1;
  }
`;
