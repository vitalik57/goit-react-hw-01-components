import React from "react";
import PropTypes from "prop-types";
import styles from "./statis.module.css";

const Statistics = ({ stats }) => {
  return (
    <section className={styles.stat}>
      <h2 className={styles.title}>UPLOAD STATS</h2>
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.list_item} key={id}>
            <span className={styles.item}>{label} </span>
            <span className={styles.prow}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.object.isRequired
};
export default Statistics;
