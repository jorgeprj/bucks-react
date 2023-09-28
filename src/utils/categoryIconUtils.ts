import { IconType } from "react-icons";

import { FaCartShopping, FaCarSide, FaShop, FaHospital, FaPlane, FaComputer, FaGamepad, FaBurger, FaApple, FaUber, FaYoutube, FaSpotify, FaUser, FaTag } from 'react-icons/fa6'

export const getCategoryIcon = (categoryName: string): IconType => {
	let icon: IconType;

	switch (categoryName) {
		case 'Supermarket':
			icon = FaCartShopping;
			break;
		case 'Transport':
			icon = FaCarSide;
			break;
		case 'Shopping':
			icon = FaShop;
			break;
		case 'Hospital':
			icon = FaHospital;
			break;
		case 'Trip':
			icon = FaPlane;
			break;
		case 'Electronics':
			icon = FaComputer;
			break;
		case 'Games':
			icon = FaGamepad;
			break;
		case 'Food':
			icon = FaBurger;
			break;
		case 'Apple':
			icon = FaApple;
			break;
		case 'Youtube':
			icon = FaYoutube;
			break;
		case 'Personal':
			icon = FaUser;
			break;
		case 'Uber':
			icon = FaUber;
			break;
		case 'Spotify':
			icon = FaSpotify;
			break;
		default:
			icon = FaTag;
			break;
	}
	return icon;
};