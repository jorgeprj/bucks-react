import { Transaction } from '../../interfaces/Transaction';
import { getCategoryIcon } from '../../utils/categoryIconUtils';
import { formatCurrency } from '../../utils/currencyUtils';
import { formatDate } from '../../utils/dateUtils';
import './TransactionCard.css'


interface TransactionCardProps {
	transaction: Transaction
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {

	const formattedValue = formatCurrency(parseFloat(transaction.amount), "USD");

	const Icon = getCategoryIcon(transaction.category.name);

	return (
		<div className='transaction-card'>
			<Icon />
			<div className='transaction-text'>
				<h4>{transaction.name}</h4>
				<p>{formatDate(transaction.date)}</p>
			</div>
			<div className={`transaction-value ${transaction.type}`}>
				<h4>{transaction.type === 'Sent' ? `-${formattedValue}` : `+${formattedValue}`}</h4>
			</div>
		</div>
	)
}

export default TransactionCard