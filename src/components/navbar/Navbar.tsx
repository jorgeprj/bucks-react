import "./Navbar.css"

import { FaUser } from "react-icons/fa6"

import Menu from "./menu/Menu"

const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<span className="logo">BUCKS</span>
			<Menu />
			<span className="account">
				<FaUser /> My Account
			</span>
		</div>
	);
};

export default Navbar
