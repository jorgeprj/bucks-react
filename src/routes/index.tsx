import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes