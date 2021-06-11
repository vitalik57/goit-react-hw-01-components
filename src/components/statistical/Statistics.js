import React from "react";
import PropTypes from "prop-types";
import styles from "./statis.module.css";

const Statistics = ({ stats, title = "" }) => {
  return (
    <section className={styles.stat}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
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
