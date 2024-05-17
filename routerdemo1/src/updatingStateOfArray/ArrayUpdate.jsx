import { useState } from "react";

const ArrayUpdate = () => {
  const [foods, setFood] = useState([
    "apple",
    "banana",
    "orange",
    "kiwi",
    "pineapple",
  ]);

  const handleAddFood = (event) => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    // setFood([...foods, newFood]);
    setFood((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFood(foods.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>List of Food</h2>
      <ol>
        {foods.map((item, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {item}
          </li>
        ))}
      </ol>

      <input type="text" id="foodInput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
};
export default ArrayUpdate;
