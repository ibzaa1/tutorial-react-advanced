import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ibby",
    age: 16,
    message: "Sup",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("sup");
  // console.log(person);

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("Hello ");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
