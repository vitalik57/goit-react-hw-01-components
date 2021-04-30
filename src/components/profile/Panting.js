import React from "react";
import PropTypes from "prop-types";
import styles from './profile.module.css'

const Panting = ({ user }) => {
  const {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <section className = {styles.profile}>
      <img src={avatar} alt={name}/>
      <p className = {styles.name}>{name}</p>
      <p className = {styles.tag}>@{tag}</p>
      <p className = {styles.locat}>{location}</p>
      <ul className = {styles.list}>
        <li className = {styles.list_item}>
          <span className = {styles.item}>Followers </span>
          <span className = {styles.number}>{followers}</span>
        </li>
        <li className = {styles.list_item}>
          <span className = {styles.item}>Views </span>
          <span className = {styles.number}>{views}</span>
        </li>
        <li className = {styles.list_item}>
          <span className = {styles.item}>Likes </span>
          <span className = {styles.number}>{likes}</span>
        </li>
      </ul>
    </section>
  );
};
Panting.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};
Panting.propTypes = {
  location: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
export default Panting;
