import { FC, useState } from 'react';
import { ITransaction } from '../../interfaces/Transaction';
import { getCategoryIcon } from '../../utils/categoryIconUtils';
import { formatCurrency } from '../../utils/currencyUtils';
import { formatDate } from '../../utils/dateUtils';
import './TransactionCard.css'

import { FaX } from 'react-icons/fa6'
import Popup from './popup/Popup';

interface TransactionCardProps {
	transaction: ITransaction,
	deleteTransaction: (transactionId: string, transactionAmount: number, transactionType: string) => void;
}

const TransactionCard: FC<TransactionCardProps> = ({ transaction, deleteTransaction }) => {
	const [confirmCard, setConfirmCard] = useState(false);

	const formattedValue = formatCurrency(parseFloat(transaction.amount), "USD");
	const Icon = getCategoryIcon(transaction.category.name);


	return (
		<div>
			{confirmCard && (
				<Popup setConfirmCard={setConfirmCard} transaction={transaction} deleteTransaction={deleteTransaction}/>
			)}

			<div className='transaction-card'>
				<Icon />
				<div className='transaction-text'>
					<h4>{transaction.name}</h4>
					<p>{formatDate(transaction.date)}</p>
				</div>
				<div className={`transaction-value ${transaction.type}`}>
					<h4>{transaction.type === 'Sent' ? `-${formattedValue}` : `+${formattedValue}`}</h4>
				</div>
				<div className='transaction-delete' onClick={() => setConfirmCard(true)}>
					<FaX />
				</div>
			</div>
		</div>

	)
}

export default TransactionCard