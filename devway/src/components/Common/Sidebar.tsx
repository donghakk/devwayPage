import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const menus = [
    { name: "HOME", path: "/" },
    { name: "DEVWAY", path: "/devway" },
    { name: "BY DEVWAY", path: "/bydevway" },
  ];

  return (
    <Side>
      {menus.map((menu, index) => (
        <NavLinkStyled className="active" to={menu.path} key={index}>
          <SidebarItem menu={menu} />
        </NavLinkStyled>
      ))}
    </Side>
  );
}

export default Sidebar;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 20%;
  margin-left: 20px;
  margin-top: 50px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  background-color: white;
  padding: 15px 15px;
  border-radius: 0 35px 35px 0;
  width: 160px;
  color: grey;

  &:hover {
    color: black;
    background-color: #fef7cf;
    font-weight: bold;
    opacity: 1;
  }
`;
