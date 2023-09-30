import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Account from '../pages/account/Account'
import { FC } from 'react'
import { IAccount } from '../interfaces/Account'

interface AppRoutesProps {
	account: IAccount,
};

const AppRoutes: FC<AppRoutesProps> = ( {account} ) => {
    return (
        <Routes>
            <Route path="/" element={<Home iAccount={account} />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/myaccount" element={<Account iAccount={account}/>} />
        </Routes>
    )
}

export default AppRoutes