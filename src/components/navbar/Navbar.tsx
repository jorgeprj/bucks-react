import "./Navbar.css"

import { FaUser } from "react-icons/fa6"

import Menu from "./menu/Menu"
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {

	const location = useLocation();



	return (
		<div className="navbar">
			<span className="logo">BUCKS</span>
			<Menu />
			<span className={`my-account ${location.pathname === '/myaccount' ? 'active' : ''}`}>
				<Link to={"/myaccount"}>
					<FaUser /> My Account
				</Link>
			</span>
		</div>
	);
};

export default Navbar
