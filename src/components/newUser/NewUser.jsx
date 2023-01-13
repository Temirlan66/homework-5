import React from "react";
import UserForm from "../userform/UserForm";


const NewUser = ({ newUserAdd }) => {
  return (
    <div>
      <UserForm newUserAdd={newUserAdd} />
    </div>
  );
};

export default NewUser;
