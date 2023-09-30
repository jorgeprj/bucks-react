import { FC } from "react"

import './Popup.css'
import { ITransaction } from "../../../interfaces/Transaction";

interface PopupProps {
	setConfirmCard: (boolean: boolean) => void;
    transaction: ITransaction;
	deleteTransaction: (transactionId: string, transactionAmount: number, transactionType: string) => void;
}

const Popup: FC<PopupProps> = ( {setConfirmCard, transaction, deleteTransaction} ) => {
    return (
        <div className='popup'>
            <div className='popup-content'>
                <h2>Confirm the action</h2>
                <p>Do you really want to delete this transaction?</p>
                <div className='popup-buttons'>
                    <button className="popup-button no" onClick={() => setConfirmCard(false)}>
                        Cancel
                    </button>
                    <button className="popup-button yes" onClick={() => deleteTransaction(transaction.id, parseFloat(transaction.amount), transaction.type)}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Popup