import AddTransaction from '../../components/add-transaction/AddTransaction';
import Balance from '../../components/balance/Balance';
import Message from '../../components/message/Message';
import TransactionCard from '../../components/transaction-card/TransactionCard';
import { IAccount } from '../../interfaces/Account';

import './Home.css'

import { FC, useEffect, useState } from "react"

interface HomeProps {
	iAccount: IAccount,
};

const Home: FC<HomeProps> = ({ iAccount }) => {
	const [account, setAccount] = useState(iAccount);
	const [addTransaction, setAddTransaction] = useState(false);

	const [message, setMessage] = useState<string>();
	const [type, setType] = useState<string>();

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
		setMessage(undefined);
		
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
				setMessage("Transaction deleted successfully!");
				setType("success");
			})
			.catch((err) => console.log(err));
	}

	return (
		<div>
			{message && <Message type={type} text={message} />}
			<div className="home">
				<div className='home-content'>
					{addTransaction && (
						<div>
							<AddTransaction 
								onClose={closeAddTransaction} 
								accountData={account} 
								closeAddTransaction={closeAddTransaction}
							/>
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
		</div>

	)
}

export default Home