import React from "react";
import styles from "./friendList.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li className={styles.item} key={id}>
          <p className={isOnline ? styles.online : styles.offline} />
          <img className={styles.images} src={avatar} alt={name} width="48" />
          <span className={styles.name}>{name}</span>
        </li>
      ))}
    </>
  );
};
FriendListItem.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
};
FriendListItem.prototype = {
  friends: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  })
};

export default FriendListItem;
