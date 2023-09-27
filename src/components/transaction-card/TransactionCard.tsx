import './TransactionCard.css'

import { FaUber } from 'react-icons/fa6'

interface TransactionCardProps {
	value: number;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ value }) => {

  const formattedValue = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(value);


  return (
    <div className='transaction-card'>
        <FaUber/>
        <div className='transaction-text'>
            <h4>Uber Black</h4>
            <p>30 November 2023</p>
        </div>
        <div className='transaction-value'>
            <h4>{formattedValue}</h4>
        </div>
    </div>
  )
}

export default TransactionCard