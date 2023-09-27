import Balance from '../../components/balance/Balance';
import TransactionCard from '../../components/transaction-card/TransactionCard';
import './Home.css'

import { useState } from "react"

const Home = () => {
	const [balance, setBalance] = useState(1056.32);

	const transaction = 
	{
		"amount": 32.17,
		"date": "2023-11-11",
		"name": "Uber Black",
	}

	return (
		<div className="home">
			<div className='home-content'>
				<div className='home-header'>
					<h1>Transactions</h1>
					<button>+</button>
				</div>
				<Balance balance={balance}/>
				<div className='transactions-cards'>
					<TransactionCard transaction={transaction}/>
				</div>
			</div>
		</div>
	)
}

export default Home