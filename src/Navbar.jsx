import React from "react"
import styled from "styled-components";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
    background-color: white;
    padding: 0 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PagesWrapper = styled.nav`
    display: flex;
    align-items: center;
    list-style: none;
`;

const PageReference = styled(Link)`
    display: flex;
    padding: 14px 50px;
    font-size: 20px;
    font-weight: bold
    align-items: center;
    font-family: Oswald,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #3d4246;
    line-height: 1.5;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: black;
    }
`; 

const LogoWrapper = styled(Link)`
    display: flex;
    justify-content: flex-start;
`;

const Logo = styled.img`
    max-width: 220px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Navbar = () => {
    return(
        <NavbarWrapper>
            <LogoWrapper to="/">
            <Logo src={logo}></Logo>
            </LogoWrapper>
            <PagesWrapper>
                <PageReference to="/">Home</PageReference>
                <PageReference to="/catalog">Catalog</PageReference>
            </PagesWrapper>
        </NavbarWrapper>

    );
}

export default Navbar