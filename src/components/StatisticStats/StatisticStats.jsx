import PropTypes from 'prop-types';
import css from './StatisticStats.module.css'

export const StatisticStats = ({ label, percentage}) => {
  return (<li className ={css.statItem}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
  </li>) 
}

StatisticStats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}
