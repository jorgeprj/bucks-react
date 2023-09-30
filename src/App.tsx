import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes"
import Navbar from "./components/navbar/Navbar"
import { useEffect, useState } from "react"
import { IAccount } from "./interfaces/Account"

function App() {

	const [account, setAccount] = useState<IAccount>({
		name: '',
		number: '',
		startBalance: 0,
		balance: 0,
		transactions: [{
			id: '',
			amount: '0',
			date: '',
			name: '',
			category: {
				id: 0,
				name: ''
			},
			type: 'Received',
		}]
	})

    useEffect(() => {

		fetch('http://localhost:5000/account', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setAccount(data);
			})
			.catch((err) => console.log(err));
	}, [account])


	return (
		<Router>
			<Navbar/>
			<AppRoutes account={account}/>
		</Router>
	)
}
export default App
