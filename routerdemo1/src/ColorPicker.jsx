import { useState } from "react";
import "./index.css";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p> Choosen Color : {color}</p>
      </div>
      <label htmlFor=""> Select Color : </label>
      <input type="color" value={color} onChange={onColorChange} />
    </div>
  );
};
export default ColorPicker;
