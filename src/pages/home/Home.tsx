import Balance from '../../components/balance/Balance';
import TransactionCard from '../../components/transaction-card/TransactionCard';
import './Home.css'

import { useState } from "react"

const Home = () => {
	const [balance, setBalance] = useState(1056.32);

	return (
		<div className="home">
			<div className='home-content'>
				<div className='home-header'>
					<h1>Transactions</h1>
					<button>+</button>
				</div>
				<Balance balance={balance}/>
				<div className='transactions-cards'>
					<TransactionCard value={32.17}/>
				</div>
			</div>
		</div>
	)
}

export default Home