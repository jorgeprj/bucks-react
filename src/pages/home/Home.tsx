import AddTransaction from '../../components/add-transaction/AddTransaction';
import Balance from '../../components/balance/Balance';
import TransactionCard from '../../components/transaction-card/TransactionCard';
import { Account } from '../../interfaces/Account';
import { Transaction } from '../../interfaces/Transaction';

import './Home.css'

import { useEffect, useState } from "react"

const Home = () => {
	const [account, setAccount] = useState<Account>({
		name: '',
		startBalance: 0,
		balance: 0,
		transactions: [{
			id: '',
			amount: '0',
			date: '',
			name: '',
			category: {
				id: 0,
				name: ''
			},
			type: 'Received',
		}]
	})

	const [addTransaction, setAddTransaction] = useState(false);

	useEffect(() => {

		fetch('http://localhost:5000/account', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setAccount(data);
			})
			.catch((err) => console.log(err));
	}, [account])


	function closeAddTransaction() {
		setAddTransaction(false);
	}

	function deleteTransaction(transactionId: string, transactionAmount: number, transactionType: string) {
		const transactionsUpdated = account.transactions.filter(
			(transaction) => transaction.id !== transactionId
		)

		const accountUpdated = account;

		accountUpdated.transactions = transactionsUpdated

		if (transactionType === "Sent") {
			account.balance = account.balance + transactionAmount;
		} else {
			account.balance = account.balance - transactionAmount;
		}

		fetch(`http://localhost:5000/account`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(accountUpdated),
		}).then(resp => resp.json())
			.then(() => {
				setAccount(accountUpdated)
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="home">
			<div className='home-content'>
				{addTransaction && (
					<div>
						<AddTransaction onClose={closeAddTransaction} accountData={account} closeAddTransaction={closeAddTransaction} />
					</div>
				)}
				<div className='home-header'>
					<h1>Transactions</h1>
					<button onClick={() => setAddTransaction(true)}>+</button>
				</div>
				<Balance balance={account.balance} />
				<h3>Last</h3>
				<div className='transactions-cards'>
					{account.transactions
						.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
						.map(transaction => (
							<TransactionCard transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.name} />
						))}
				</div>
			</div>
		</div>
	)
}

export default Home