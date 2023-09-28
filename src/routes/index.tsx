import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Account from '../pages/account/Account'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/myaccount" element={<Account/>} />
        </Routes>
    )
}

export default AppRoutes