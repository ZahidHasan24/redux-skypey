import React from "react";
import "./User.css";
import store from "../../redux/store";
import { setActiveUserId } from "../../redux/action";

const User = ({ user }) => {
  const { name, profile_pic, status } = user;
  const handleUserClick = ({ user_id }) => {
    console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
  };
  return (
    <div className="User" onClick={() => handleUserClick(user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};
export default User;
