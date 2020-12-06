import "./Message.css";
import React from "react";

function Message({ message, timestamp, user, userImage }) {
  console.log(timestamp);
  console.log(new Date(timestamp?.toDateString()).toUTCString());
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toString()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
