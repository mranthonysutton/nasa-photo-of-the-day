import React, { useState } from "react";

const DateSelector = props => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="dateSelectorContainer">
      <h4>Select A Date</h4>
      <input className="data-picker" type="date" max={startDate} />
      <button>Submit</button>
    </div>
  );
};

export default DateSelector;
