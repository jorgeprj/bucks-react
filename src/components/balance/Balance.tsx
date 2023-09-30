import { useState } from 'react';
import './Balance.css'

import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { formatCurrency } from '../../utils/currencyUtils';

interface BalanceProps {
	balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
	const [viewBalance, setViewBalance] = useState(false);

	const formattedBalance = formatCurrency(balance, "USD");
	const [integerPart, decimalPart] = formattedBalance.split('.');

	function toggleViewBalance() {
		setViewBalance(!viewBalance)
	}

	return (
		<div className="balance">
			<h1>
				{viewBalance ? (
					<div>
						{integerPart}<span>.{decimalPart}</span>
					</div>
				) : (
					<div>
						{Array.from({ length: String(balance).length }, (_, index) => (
							<span style={{color: "var(--text-high)"}} key={index}>●</span>
						))}
					</div>
				)}
			</h1>
			<div className='balance-text'>
				<h4>Account Balance</h4>
				{viewBalance ? (
					<FaEye onClick={toggleViewBalance} />
				) : (
					<FaEyeSlash onClick={toggleViewBalance} />
				)}
				
			</div>

		</div>
	);
};

export default Balance