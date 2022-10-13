import React from "react";
import { useState } from "react";

export function EngineCalc() {
  const [cylinders, setCylinders] = useState(8);
  const [bore, setBore] = useState(4);
  const [stroke, setStroke] = useState(3.48);

  const handleSubmit = (event) => {
    let displacement = Math.PI * Math.pow(bore / 2, 2) * stroke * cylinders;
    alert(`${displacement} cubic inches`);

    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="cylinders">Cylinders:</label>
      <input
        type="number"
        id="cylinders"
        name="cylinders"
        value={cylinders}
        onChange={(e) => setCylinders(e.target.value)}
        min="1"
        max="12"
      ></input>
      <br />
      <label for="bore">Bore (inches):</label>
      <input
        type="number"
        id="bore"
        step="0.0001"
        name="bore"
        value={bore}
        onChange={(e) => setBore(e.target.value)}
        min="1"
        max="6"
      ></input>
      <br />
      <label for="stroke">Stroke (inches):</label>
      <input
        type="number"
        id="stroke"
        step="0.0001"
        name="stroke"
        value={stroke}
        onChange={(e) => setStroke(e.target.value)}
        min="1"
        max="6"
      ></input>
      <br />
      {/* <input type="reset" onClick={setBore(1.0000)}></input> */}
      <input type="submit" value="Submit"></input>
    </form>
  );
}
