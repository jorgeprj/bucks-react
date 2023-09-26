import Balance from '../../components/balance/Balance';
import './Home.css'

import { useState } from "react"

const Home = () => {
	const [balance, setBalance] = useState(107.32);

	return (
		<div className="home">
			<div className='home-content'>
				<div className='home-header'>
					<h1>Transactions</h1>
					<button>+</button>
				</div>
				<Balance balance={balance}/>

			</div>
		</div>
	)
}

export default Home