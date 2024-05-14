import React, { useState } from "react";

export default function Weather() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");

  function changeCityName(event) {
    setCity(event.target.value);
  }

  function changeText(event) {
    event.preventDefault();
    if (city.length < 1) {
      setText(``);
    } else {
      setText(`it is currently 20°C in ${city}`);
    }
  }

  return (
    <div className="Weather">
      <form onSubmit={changeText}>
        <input
          type="search"
          onChange={changeCityName}
          placeholder="Enter a city"
        />
        <input type="submit" value="Search" />
      </form>
      {text}
    </div>
  );
}
