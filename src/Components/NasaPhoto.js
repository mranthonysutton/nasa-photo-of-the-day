import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import DateSelector from "./DateSelector";

export default function NasaPhoto(props) {
  // Function to grab today's date
  const todayDate = () => {
    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    today = `${year}-${month}-${day}`;
    return today;
  };

  const [photoData, setPhotoData] = useState({});
  const [dateSelector, setDateSelector] = useState(todayDate());

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
  }, [dateSelector]);

  return (
    <div className="content-container">
      <h1>{photoData.title}</h1>
      <img className="api-img" src={photoData.hdurl} />
      <p>{photoData.explanation}</p>
      <DateSelector
        dateSelector={dateSelector}
        setDateSelector={setDateSelector}
      />
    </div>
  );
}
