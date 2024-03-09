import React from "react";

export const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.loc}</h3>
      <h4>Contact: vishagasan3108@gmail.com</h4>
    </div>
  );
};
export default User;
