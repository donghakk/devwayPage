import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

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
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = (menuName: string) => {
    setHoveredMenu(menuName);
    if (menuName === "GUIDE") {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setShowDropdown(false);
  };

  return (
    <Side>
      {menus.map((menu, index) =>
        menu.download ? (
          <GuideContainer
            key={index}
            onMouseEnter={() => handleMouseEnter(menu.name)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLinkStyled
              to="#"
              isActive={menu.name === name}
              hoveredMenu={hoveredMenu}
            >
              {menu.name}
            </NavLinkStyled>
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem href="/Devway_User_Guide.html" download>
                  <FaDownload />
                  English
                </DropdownItem>
                <DropdownItem href="/Devway_User_Guide_KO.html" download>
                  <FaDownload />
                  한국어
                </DropdownItem>
              </DropdownMenu>
            )}
          </GuideContainer>
        ) : (
          <NavLinkStyled
            className="active"
            to={menu.path}
            key={index}
            isActive={menu.name === name}
            onMouseEnter={() => handleMouseEnter(menu.name)}
            onMouseLeave={handleMouseLeave}
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

const GuideContainer = styled.div`
  position: relative;
  width: 160px; /* GUIDE 메뉴가 동일한 폭을 유지하도록 설정 */
  display: flex;
  justify-content: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 160px; /* 부모 요소와 동일한 너비 */
  z-index: 1;
`;

const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  color: grey;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
    color: black;
  }

  svg {
    margin-right: 8px; /* 아이콘과 텍스트 사이의 간격 */
  }
`;
