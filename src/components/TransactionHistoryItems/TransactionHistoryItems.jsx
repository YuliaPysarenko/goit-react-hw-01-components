 import PropTypes from 'prop-types';
import css from './TransactionHistoryItems.module.css'

export const  TransactionHistoryItems = ({ type, amount,currency}) => {
  return(
  // <table className={css.transactionHistory}>
  <tbody className= {css.tableBody}>
    <tr>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </tr>
  </tbody>)
// </table>
}

TransactionHistoryItems.propTypes = {

            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired, 
            currency: PropTypes.string.isRequired,
}