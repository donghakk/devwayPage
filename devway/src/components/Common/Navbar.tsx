import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

interface NavbarProps {
  name: string;
}

function Sidebar({ name }: NavbarProps) {
  const menus = [
    { name: "HOME", path: "/" },
    { name: "DEVWAY", path: "/devway" },
    { name: "BY DEVWAY", path: "/bydevway" },
    { name: "FAQ", path: "/faq" },
    { name: "GUIDE", path: "/guideline.html", download: true },
  ];

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <Side>
      {menus.map((menu, index) =>
        menu.download ? (
          <AnchorStyled
            href={menu.path}
            key={index}
            onMouseEnter={() => setHoveredMenu(menu.name)}
            onMouseLeave={() => setHoveredMenu(null)}
            hoveredMenu={hoveredMenu}
            download
          >
            {menu.name === "GUIDE" && hoveredMenu === "GUIDE"
              ? "Click to Download"
              : menu.name}
          </AnchorStyled>
        ) : (
          <NavLinkStyled
            className="active"
            to={menu.path}
            key={index}
            isActive={menu.name === name}
            onMouseEnter={() => setHoveredMenu(menu.name)}
            onMouseLeave={() => setHoveredMenu(null)}
            hoveredMenu={hoveredMenu}
          >
            {menu.name}
          </NavLinkStyled>
        )
      )}
    </Side>
  );
}

export default Sidebar;

const Side = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)<{
  isActive: boolean;
  hoveredMenu: string | null;
}>`
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

  ${({ isActive }) =>
    isActive &&
    `
    color: black;
      font-weight: bold;
    `}

  ${({ hoveredMenu }) =>
    hoveredMenu === "GUIDE" &&
    `
    &:hover {
        content: "Click to Download";
        color: red;
        transition: color 0.4s;
    }
`}
`;

const AnchorStyled = styled.a<{
  hoveredMenu: string | null;
}>`
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

  ${({ hoveredMenu }) =>
    hoveredMenu === "GUIDE" &&
    `
    &:hover {
        color: red;
        transition: color 0.4s;
    }
`}
`;
