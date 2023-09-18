
import { BiChevronRight } from 'react-icons/bi'

import '../styles/BalanceCard.css'

const BalanceCard = () => {
	return (
		<div className='main'>
			<div className="balance-card-container">
				<div className='card-header'>
					<h2>PayTrack</h2>
					<p>Balance</p>
				</div>
				<div className='card-balance'>
					<h1>982,93</h1>
					<h1>EUR</h1>
				</div>
				<p>Available</p>
				<button><BiChevronRight/></button>
			</div>

		</div>
	)
}

export default BalanceCard