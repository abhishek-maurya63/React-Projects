import React from "react";

const Read = (props) => {
  console.log(props);

  
  
  const renderUser = users.map((user, idx) => {
    return <li key={idx}>{user.name}</li>;
  });

  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderUser}</ol>
    </div>
  );
};

export default Read;
