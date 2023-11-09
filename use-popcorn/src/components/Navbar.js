import React from 'react';
import Logo from './Logo';
function Navbar({ children }) {
	<Logo />;
	return (
		<nav className="nav-bar">
			<Logo />
			{children}
		</nav>
	);
}

export default Navbar;
