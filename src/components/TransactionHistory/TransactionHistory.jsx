import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import { TransactionHistoryItems } from 'components/TransactionHistoryItems/TransactionHistoryItems';

export const TransactionHistory = ({items}) => {
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
            <TransactionHistoryItems
                key={id}
                type={type}
                amount={amount}
                currency={currency} />)}
 </table>
    )}
         
TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired, 
            currency: PropTypes.string.isRequired,
        })
    )
}



// // import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css'

// export const  TransactionHistory= ({items}) => {
//     return <table className={css.transactionHistory}>
//   <thead>
//     <tr>
//       <th>Type {items.type }</th>
//       <th>Amount{items.amount}</th>
//       <th>Currency{items.currency}</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>{ items.type}</td>
//       <td>{items.amount}</td>
//       <td>{items.currency}</td>
//     </tr>
//     <tr>
//       <td>{items.type}</td>
//       <td>{items.amount}</td>
//       <td>{items.currency}</td>
//     </tr>
//   </tbody>
// </table>
// }