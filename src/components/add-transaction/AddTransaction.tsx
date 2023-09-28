import { Account } from '../../interfaces/Account';
import { Transaction } from '../../interfaces/Transaction';
import './AddTransaction.css'

import { ChangeEvent, FC, FormEvent, useState } from "react";
import CheckTransaction from './check-transaction/CheckTransaction';

import { FaChevronLeft } from 'react-icons/fa6';

interface TransactionProps {
    onClose: () => void;
    accountData: Account;
    closeAddTransaction: () => void;
}


const AddTransaction: FC<TransactionProps> = ({ onClose, accountData, closeAddTransaction }) => {
    const [transaction, setTransaction] = useState<Transaction>({
        amount: '',
        date: '',
        name: '',
        type: 'Sent',
    });

    const [checkTransaction, setCheckTransaction] = useState(false);
    const [transactionStatus, setTransactionStatus] = useState(true);

    function createTransaction(account: Account) {

        setTransactionStatus(true);
        const lastTransaction: Transaction = account.transactions[account.transactions.length - 1];

        if (lastTransaction.type === "Sent") {
            if (parseFloat(lastTransaction.amount) > account.balance) {
                account.transactions.pop()
                setCheckTransaction(true);
                setTransactionStatus(false);
                setTimeout(() => {
                    setCheckTransaction(false);
                    closeAddTransaction();
                }, 3000);
                return;
            }
            account.balance -= parseFloat(lastTransaction.amount);
        } else {
            account.balance += parseFloat(lastTransaction.amount);
        }

        fetch(`http://localhost:5000/account`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account),
        }).then(resp => resp.json())
            .then((data) => {
                setCheckTransaction(true);
                setTimeout(() => {
                    setCheckTransaction(false);
                    closeAddTransaction();
                }, 1000);

                console.log(data);
            })
            .catch((err) => console.log(err));
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        accountData.transactions.push(transaction);
        createTransaction(accountData);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };


    return (
        <div className="add-transaction">
            <div className="add-transaction-content">
                {!checkTransaction ? (
                    <div>
                        <div className='add-transaction-header'>
                            <span onClick={onClose}><FaChevronLeft/></span>
                            <h2>Add Transaction</h2>
                        </div>
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <label>Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={transaction.amount}
                                    onChange={handleChange}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={transaction.date}
                                    onChange={handleChange}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={transaction.name}
                                    onChange={handleChange}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label>Type</label>
                                <select
                                    name="type"
                                    value={transaction.type}
                                    onChange={handleChange}
                                    className="input-field"
                                >
                                    <option value="Received">Received</option>
                                    <option value="Sent">Sent</option>
                                </select>
                            </div>
                            
                            <button className="add-button" type="submit">
                                {transaction.type}
                            </button>
                        </form>
                    </div>
                ) : (
                    <CheckTransaction type={transactionStatus} transaction={transaction} />
                )}

            </div>
        </div>
    );
};

export default AddTransaction