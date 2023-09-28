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
			amount: '0',
			date: '',
			name: '',
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
	}, [])


	function closeAddTransaction(){
		setAddTransaction(false);
	}

	function createTransaction(account: Account){

		const lastTransaction: Transaction = account.transactions[account.transactions.length - 1];
		
		if(lastTransaction.type === "Sent"){
			if(parseFloat(lastTransaction.amount) > account.balance){
				console.log("Transaction amount is bigger than account balance");
				account.transactions.pop()
				return false;
			}
			account.balance -= parseFloat(lastTransaction.amount);
		}else{
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
				closeAddTransaction();
				console.log(data);
			})
			.catch((err) => console.log(err));


	}

	return (
		<div className="home">
			<div className='home-content'>
				{addTransaction && (
					<div>
						<AddTransaction onClose={closeAddTransaction} handleSubmit={createTransaction} accountData={account}/>
					</div>
				)}
				<div className='home-header'>
					<h1>Transactions</h1>
					<button onClick={() => setAddTransaction(true)}>+</button>
				</div>
				<Balance balance={account.balance}/>
				<div className='transactions-cards'>
					{account.transactions.map(transaction => (
						<TransactionCard transaction={transaction}/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home