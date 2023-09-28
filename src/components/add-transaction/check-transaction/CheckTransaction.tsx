import { FC } from "react"

import { FaCheck, FaX } from 'react-icons/fa6'
import { Transaction } from "../../../interfaces/Transaction";

import './CheckTransaction.css'
import { formatCurrency } from "../../../utils/currencyUtils";

interface CheckProps {
    type: boolean;
    transaction: Transaction;
}

const CheckTransaction: FC<CheckProps> = ({ type, transaction }) => {

    return (
        <div className="check-transaction">
            {type ?
                    <div>
                        <span className="success">
                            <FaCheck/>
                        </span>
                        <h2>Successfully</h2>
                        <p>You {transaction.type.toLowerCase()}</p>
                        <h3>{formatCurrency(parseFloat(transaction.amount), "USD" )}</h3>
                    </div>
                :
                <div>
                    <span className="denied">
                        <FaX/>
                    </span>
                    <h2>Denied</h2>
                    <p>Transaction amount is bigger than account balance</p>
                    <h3>{formatCurrency(parseFloat(transaction.amount), "USD" )}</h3>
                </div>
            }
        </div>
    )
}

export default CheckTransaction