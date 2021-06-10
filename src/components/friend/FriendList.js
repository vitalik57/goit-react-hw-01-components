import React from "react";
import styles from "./friendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <section className={styles.friend}>
      <ul className={styles.list}>
        <FriendListItem friends={friends} />
      </ul>
    </section>
  );
};

export default FriendList;
