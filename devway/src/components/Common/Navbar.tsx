import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";
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
        { name: "GUIDE", path: "" },
    ];

    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    return (
        <Side>
            {menus.map((menu, index) => (
                <NavLinkStyled
                    className="active"
                    to={menu.path}
                    key={index}
                    isActive={menu.name === name}
                    onMouseEnter={() => setHoveredMenu(menu.name)}
                    onMouseLeave={() => setHoveredMenu(null)}
                    hoveredMenu={hoveredMenu}
                >
                    {menu.name === "GUIDE" && hoveredMenu === "GUIDE"
                        ? "Click to Download"
                        : menu.name}
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
