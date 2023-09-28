import { Link, useLocation } from 'react-router-dom';
import './Menu.css'

import { FaRightLeft, FaChartLine } from 'react-icons/fa6'


const Menu: React.FC = () => {

    const location = useLocation();

    return (
        <div className="menu">
            <div className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to={"/"}>
                    <FaRightLeft />
                    <span>Transactions</span>
                </Link>
            </div>

            <div className={`menu-item ${location.pathname === '/investments' ? 'active' : ''}`}>
                <FaChartLine />
                <span>Investments</span>
            </div>
        </div>
    );
};

export default Menu