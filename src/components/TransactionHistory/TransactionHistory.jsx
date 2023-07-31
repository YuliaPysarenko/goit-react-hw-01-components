import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.thead}>
                    <th className={css.name}>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(({id, type, amount, currency }) =>
                <tbody key= {id} className={css.tableBody}>
                    <tr>
                        <td className={css.data}>{type}</td>
                        <td className={css.data}>{amount}</td>
                        <td className={css.data}>{currency}</td>
                    </tr>
                </tbody>)}
        </table>
    )
}
         
TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired, 
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

