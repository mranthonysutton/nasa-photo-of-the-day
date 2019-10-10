import React, { useState } from "react";
import styled from "styled-components";

const DateSelector = props => {
  // Styled Components
  const DateSelectorContainer = styled.div`
    margin: 2rem 0;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #282c34;
  `;

  const StyledH4 = styled.div`
    font-size: 3rem;
  `;

  const DatePickerInput = styled.input`
    font-size: 2rem;
    padding: 2rem;
    margin: 2rem 0;
  `;

  return (
    <DateSelectorContainer>
      <StyledH4>Select A Date</StyledH4>
      <DatePickerInput
        className="data-picker"
        type="date"
        value={props.dateSelector}
        onChange={e => props.setDateSelector(e.target.value)}
      />
    </DateSelectorContainer>
  );
};

export default DateSelector;
