import { useState } from "react";
import "./style.css";

export default function App() {
  const [etchASketchBoxes, setEtchASketchBoxes] = useState(
    Array.from({ length: 64 }, (x) => ({
      className: "",
      id: crypto.randomUUID(),
    }))
  );

  const [squaresPerSide, setSquaresPerSide] = useState(8);

  function updateSquaresPerSide(newValue) {
    setSquaresPerSide(newValue);

    let newAmountOfBoxes = { length: newValue * newValue };

    setEtchASketchBoxes(
      Array.from({ ...newAmountOfBoxes }, (x) => ({
        className: "",
        id: crypto.randomUUID(),
      }))
    );
  }

  return (
    <>
      <h1>
        {squaresPerSide} x {squaresPerSide} Etch-A-Sketch
      </h1>

      <form>
        <label htmlFor="item">SQUARES PER SIDE: </label>
        <input
          type="range"
          id="item"
          max="64"
          min="1"
          value={squaresPerSide}
          onChange={(e) => updateSquaresPerSide(e.target.value)}
        />
      </form>

      <button className="reset-btn" onClick={(e) => updateSquaresPerSide(8)}>
        RESET
      </button>

      <div className="etsketch-frame">
        {etchASketchBoxes.map((element) => (
          <div
            {...element}
            style={{
              height: 640.0 / squaresPerSide,
              width: 640.0 / squaresPerSide,
            }}
            onMouseEnter={(e) => {
              setEtchASketchBoxes((prev) =>
                prev.map((element) =>
                  element.id === e.target.id
                    ? { ...element, className: "change-to-black" }
                    : element
                )
              );
            }}
          />
        ))}
      </div>
    </>
  );
}
