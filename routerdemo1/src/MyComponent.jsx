import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("kavya");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const onNameChange = () => {
    setName("Riya");
  };

  const onIncreseAge = () => {
    setAge(age + 1);
  };

  const onToggleStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name : {name}</p>
        <button onClick={onNameChange}>Set Name</button>

        <p>Name : {age}</p>
        <button onClick={onIncreseAge}>Set Age</button>

        <p>Status : {isEmployed ? "yes" : "No"}</p>
        <button onClick={onToggleStatus}>Toggle Status</button>
      </div>
    </>
  );
};

export default MyComponent;
