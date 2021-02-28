import React from 'react';
import Nav from './Nav';
import NavItems from './NavItems.json';
import styles from './Header.module.scss';
import styled from 'styled-components';
// import logo from './logo.png';

const StyledHeader = styled('header')`
	position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  width: 100%;
  background: #333;
  color: #fff;
`;

const Header = () => (
  <StyledHeader>
		<a href="/">
			{/* <img src={logo} alt="Accion Digital"/> */}
		</a>
		<Nav items={NavItems} />
	</StyledHeader>
);

export default Header;
