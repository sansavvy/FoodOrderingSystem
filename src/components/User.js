import React, { useEffect, useState } from "react";

export const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect({}, []);
  return (
    <div className="m-4 p-4 bg-teal-200">
      <h1>Count:{count}</h1>
      <h1>CountFNC:{count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.loc}</h3>
      <h4>Contact: vishagasan3108@gmail.com</h4>
    </div>
  );
};
export default User;
