import { useState } from 'react';
import './Balance.css'

import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface BalanceProps {
	balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {

	const [viewBalance, setViewBalance] = useState(true);

	const formattedBalance = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(balance);

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