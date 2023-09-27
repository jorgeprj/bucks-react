import { formatCurrency } from '../../utils/currencyUtils';
import { formatDate } from '../../utils/dateUtils';
import './TransactionCard.css'

import { FaUber } from 'react-icons/fa6'

interface TransactionCardProps {
	transaction: {
		amount: number;
		date: string;
		name: string;
	};
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {

	const formattedValue = formatCurrency(transaction.amount, "USD");

	return (
		<div className='transaction-card'>
			<FaUber />
			<div className='transaction-text'>
				<h4>{transaction.name}</h4>
				<p>{formatDate(transaction.date)}</p>
			</div>
			<div className='transaction-value'>
				<h4>{formattedValue}</h4>
			</div>
		</div>
	)
}

export default TransactionCard