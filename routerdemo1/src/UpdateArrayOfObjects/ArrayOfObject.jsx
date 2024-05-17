import { useState } from "react";

const ArrayOfObject = () => {
  const [cars, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setcarMake] = useState("volvo");
  const [carModel, setcarModel] = useState("polo");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCar((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setcarMake("");
    setcarModel("");
  };
  const handleRemoveCar = (index) => {
    setCar((c) => c.filter((_, i) => i !== index));
  };
  const handleCarYear = (event) => {
    setCarYear(event.target.value);
  };
  const handleCarMake = (event) => {
    setcarMake(event.target.value);
  };
  const handlecarModel = (event) => {
    setcarModel(event.target.value);
  };

  return (
    <div>
      <h2>List of Car Objects : {carYear}</h2>
      <input type="number" value={carYear} onChange={handleCarYear} />
      <br />
      <input
        id="carMake"
        type="text"
        value={carMake}
        onChange={handleCarMake}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handlecarModel}
        placeholder="Enter Car Model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <br />
      <div>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ArrayOfObject;
