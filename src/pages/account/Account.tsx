import { ChangeEvent, FC, FormEvent, useState } from 'react'
import './Account.css'
import { IAccount } from '../../interfaces/Account'
import Message from '../../components/message/Message'


interface AccountProps {
	iAccount: IAccount,
};

const Account: FC<AccountProps> = ({ iAccount }) => {

	const [message, setMessage] = useState<string>();
	const [type, setType] = useState<string>();

	const [account, setAccount] = useState(iAccount)


	function editAccount(account: IAccount) {
		setMessage(undefined);

		if (account.startBalance > iAccount.startBalance) {
			account.balance += (account.startBalance - iAccount.startBalance);
		} else {
			account.balance -= (iAccount.startBalance - account.startBalance);;
		}

		fetch(`http://localhost:5000/account`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(account),
		}).then(resp => resp.json())
			.then((data) => {
				setAccount(data);
				setMessage("Account updated successfully!");
				setType("success");
			})
			.catch((err) => console.log(err));
	}

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		editAccount(account);
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setAccount({ ...account, [e.target.name]: e.target.value });
	}

	return (
		<div>
			{message && <Message type={type} text={message} />}
			<div className='account'>
				<div className='account-content'>
					<h1>My Account <span>#{account.number}</span></h1>
					<div className='account-card'>
						<h2>My Details</h2>
						<div className='account-info'>
							<h3>Personal Information</h3>

							<form onSubmit={submit}>
								<div className="form-group">
									<label>Name</label>
									<input
										type="text"
										id="name"
										name="name"
										value={account.name}
										onChange={handleChange}
										className="input-field"
									/>
								</div>

								<div className="form-group">
									<label>Start balance</label>
									<input
										type="number"
										id="startBalance"
										name="startBalance"
										value={account.startBalance}
										onChange={handleChange}
										className="input-field"
									/>
								</div>
								<button className="save-button" type="submit">
									Save
								</button>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Account