import { BiChevronRight } from 'react-icons/bi'

import '../styles/BalanceCard.css'


interface TransactionProps {
    setTransaction: (transaction: any) => void;
}

const BalanceCard: React.FC<TransactionProps> = ({ setTransaction }) => {
	return (
		<div className='main' >
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
				<button onClick={() => setTransaction(true)}><BiChevronRight /></button>
			</div>
		</div>
	);
};

export default BalanceCard;