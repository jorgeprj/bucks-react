import { Account } from '../../interfaces/Account';
import { Transaction } from '../../interfaces/Transaction';
import './AddTransaction.css'

import { ChangeEvent, FC, FormEvent, useState } from "react";

interface TransactionProps {
    onClose: () => void;
    handleSubmit: (account: Account) => void;
    accountData: Account;
}


const AddTransaction: FC<TransactionProps> = ({ onClose, handleSubmit, accountData }) => {
    const [transaction, setTransaction] = useState<Transaction>({
        amount: '',
        date: '',
        name: '',
        type: 'Sent',
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        accountData.transactions.push(transaction);
        handleSubmit(accountData);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement |  HTMLSelectElement> ) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };


    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Transaction</h2>

                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} className="input-field" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" name="date" value={transaction.date} onChange={handleChange} className="input-field" />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={transaction.name} onChange={handleChange} className="input-field" />
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <select name="type" value={transaction.type} onChange={handleChange} className="input-field">
                            <option value="Received">Received</option>
                            <option value="Sent">Sent</option>
                        </select>

                    </div>

                    <div className="popup-buttons">
                        <button className="cancel-button" onClick={onClose}>Cancel</button>
                        <button className="add-button" type='submit'>Add</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddTransaction