import React, { useState, useEffect } from "react";
import axios from "axios";
import DateSelector from "./DateSelector";

export default function NasaPhoto(props) {
  const [photoData, setPhotoData] = useState([]);
  const [dateSelector, setDateSelector] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=70qZqLQhWqT4kF6rK4W2FDHLgzgveqdjc7oO8LW9&date=${dateSelector}`
      )
      .then(response => {
        setPhotoData(response.data);
      })
      .catch(error => {
        console.log("The data was not returned: ", error);
      });
  }, []);

  console.log(setDateSelector);

  return (
    <div className="content-container">
      <h1>{photoData.title}</h1>
      <img className="api-img" src={photoData.hdurl} />
      <p>{photoData.explanation}</p>
      <DateSelector
        dateSelector={dateSelector}
        setDateSelector={props.onChange}
      />
    </div>
  );
}
