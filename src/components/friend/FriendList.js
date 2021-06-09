import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <section className={styles.friend}>
      <ul className={styles.list}>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <li className={styles.item} key={id}>
            <p className={isOnline ? styles.online : styles.offline} />
            <img className={styles.images} src={avatar} alt={name} width="48" />
            <span className={styles.name}>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
FriendList.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
};
FriendList.prototype = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendList;
