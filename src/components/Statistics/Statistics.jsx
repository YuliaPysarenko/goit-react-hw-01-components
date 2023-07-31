 import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export const Statistics = ({ stats, title }) => {
  return (<section className={css.statistics}>
    <h2 className={css.title}>{title && `Upload stats`}</h2>
   
      <ul className={css.statList}>
      {stats.map(({id, label, percentage }) =>
        <li key={id} className={css.statItem}>
         <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li> )}
      </ul>
  </section>)
}


Statistics.propTypes = {
  title:PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
}


