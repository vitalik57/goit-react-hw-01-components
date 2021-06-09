import React from "react";
import PropTypes from "prop-types";
import styles from "./profile.module.css";

const Profile = ({ avatar, name, tag, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <section className={styles.profile}>
      <img src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.locat}>{location}</p>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <span className={styles.item}>Followers </span>
          <span className={styles.number}>{followers}</span>
        </li>
        <li className={styles.list_item}>
          <span className={styles.item}>Views </span>
          <span className={styles.number}>{views}</span>
        </li>
        <li className={styles.list_item}>
          <span className={styles.item}>Likes </span>
          <span className={styles.number}>{likes}</span>
        </li>
      </ul>
    </section>
  );
};
Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
};
Profile.propTypes = {
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired
  })
};
export default Profile;
