import { useState } from "react"
import BalanceCard from "../components/BalanceCard"
import Transaction from "../components/Transaction"

const Home = () => {

    const [transaction, setTransaction] = useState(false);

    return (
        <div>
            {transaction && (
                <Transaction setTransaction={setTransaction} />
            )}
            <BalanceCard setTransaction={setTransaction}/>
        </div>
    )
}

export default Home

