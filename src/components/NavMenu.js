import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './NavItem';

const NavList = styled.ul`
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
`;

const Nav = styled.nav`
    background-color: ${props => props.theme.background[20]};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(-200%);
    transition: transform 0.6s ease-in-out;
    z-index: 999;

    &.active{
        transform: translateY(0);
    }
`;

const NavMenu = ({isActive}) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Nav className={`${isActive ? 'active' : ''}`}>
    <NavList>
      <NavItem href="/" isActive={pathname === '/'}>Inicio</NavItem>
      <NavItem href="">Servicios</NavItem>
      <NavItem href="">Eventos</NavItem>
      <NavItem href="">Tienda</NavItem>
      <NavItem href="/login" isActive={pathname === '/login'}>admin</NavItem>
    </NavList>
  </Nav>
  )
};

export default NavMenu;