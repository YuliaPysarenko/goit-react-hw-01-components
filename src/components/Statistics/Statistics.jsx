 import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { StatisticStats } from 'components/StatisticStats/StatisticStats';

export const Statistics = ({ stats, title }) => {
  return (<section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) =>
        <StatisticStats
          key={id}
          label={label}
          percentage={percentage}
        />)}
    </ul>
  </section>)
}

Statistics.propTypes = {
  title:PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired
    })
  )
}
