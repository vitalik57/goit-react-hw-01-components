import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionList.module.css";

const Transaction = ({ trans }) => {
  return (
    <table className={styles.transa}>
      <thead>
        <tr className={styles.list}>
          <th className={styles.list_item}>Type</th>
          <th className={styles.list_item}>Amount</th>
          <th className={styles.list_item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {trans.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transaction.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default Transaction;
