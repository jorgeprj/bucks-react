import './Menu.css'

import { FaRightLeft, FaChartLine } from 'react-icons/fa6'


const Menu: React.FC = () => {
    return (
        <div className="menu">
            <div className="menu-item active">
                <FaRightLeft />
                <span>Transactions</span>
            </div>

            <div className="menu-item">
                <FaChartLine />
                <span>Invest</span>
            </div>
        </div>
    );
};

export default Menu