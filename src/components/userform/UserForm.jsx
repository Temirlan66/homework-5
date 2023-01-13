import React from "react";
import { useState } from "react";
import Mybutton from "../button/Mybutton";
import MyInput from "../input/MyInput";
import "./UserForm.css"

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const AgaInputHandler = (event) => {
    const AgeValue = event.target.value;
    if (AgeValue.charAt(0) !== "-") setUserAge(AgeValue);
  };

  const NameUserInput = (event) => {
    setUserName(event.target.value);
  };


  const addNewUser =(event)=>{
    event.preventDefault()

    const data ={
        userAge,
        userName

    }
    props.newUserAdd(data)

    setUserAge("")
    setUserName("")
  }
  return (
    <form className="form">
      <MyInput
        value={userName}
        onChange={NameUserInput}
        id="name"
        labelName="UserName"
        inputType="text"
        placeholder="Name"
      />

      <MyInput
        value={userAge}
        onChange={AgaInputHandler}
        id="age"
        labelName="Age (Years)"
        inputType="number"
        placeholder="Age"
      />

      <Mybutton
      onClick={addNewUser}
      title="Add"/>

    </form>
  );
};

export default UserForm;
