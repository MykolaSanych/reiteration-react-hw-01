import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ transactions }) {

    return(
    <table>
        <thead>
            <tr className={css.hed}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
     
            <tbody >
                {transactions.map((transaction) => (
                    <tr key={transaction.id} className={css.line}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>))}
                </tbody>
    </table>)
}