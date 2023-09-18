import '../styles/Sidebar.css'

import { BiSolidWallet, BiTransfer,  } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar">
            <img className='logo' src="/logo.png" alt="Logo" />
            <div className='nav-links'>
                <div className='link active'>
                    <BiSolidWallet />
                </div>
                <div className='link'>
                    <BiTransfer />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar