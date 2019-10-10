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

  // Styled Components
  const PhotoContainer = styled.div`
    margin: 2% 0;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ccc;
  `;

  const PhotoTitle = styled.h1`
    font-size: 4rem;
    font-family: "Indie Flower", cursive;
    color: #282c34;
  `;

  const APIImage = styled.img`
    height: auto;
    width: 70%;
    border-radius: 20px;
  `;

  const PhotoDescription = styled.p`
    padding: 0 1%;
    font-family: "Quicksand", sans-serif;
    font-size: 1.8rem;
    width: 65%;
    color: #282c34;
  `;

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
    <PhotoContainer>
      <PhotoTitle>{photoData.title}</PhotoTitle>
      <APIImage src={photoData.hdurl} />
      <PhotoDescription>{photoData.explanation}</PhotoDescription>
      <DateSelector
        dateSelector={dateSelector}
        setDateSelector={setDateSelector}
      />
    </PhotoContainer>
  );
}
