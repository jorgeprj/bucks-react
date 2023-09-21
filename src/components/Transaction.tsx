import '../styles/Transaction.css'

interface TransactionProps {
    setTransaction: (transaction: any) => void;
}

const Transaction: React.FC<TransactionProps> = ({ setTransaction }) => {
    
    return (
        <div className='main'>
            <div className="transaction-container" >

            </div>
        </div>
    )
}

export default Transaction