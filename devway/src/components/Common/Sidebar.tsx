import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Sidebar() {
  const menus = [
    { name: "HOME", path: "/" },
    { name: "DEVWAY", path: "/devway" },
    { name: "BY DEVWAY", path: "/bydevway" },
  ];

  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={{ color: "gray", textDecoration: "none" }}
              to={menu.path}
              key={index}
            >
              {/* <SidebarItem menu={menu} /> */}
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
