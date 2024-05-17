import { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "volvo",
    model: "polo GTI",
  });

  const onYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const onMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const onModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <>
      <div>
        <p>
          Your car is : {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={onYearChange} />
        <input type="text" value={car.make} onChange={onMakeChange} />
        <input type="text" value={car.model} onChange={onModelChange} />
      </div>
    </>
  );
};
export default Car;
