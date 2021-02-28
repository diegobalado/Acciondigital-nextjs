import React from 'react';
import Nav from './Nav';
import NavItems from './NavItems.json';
// import logo from './logo.png';

const Header = () => (
  <div className="fixed flex items-center justify-between h-52 w-full">
		<a href="/">
			{/* <img src={logo} alt="Accion Digital"/> */}
		</a>
		<Nav items={NavItems} />
	</div>
);

export default Header;
