import React, { useState } from "react";

const DateSelector = props => {
  //   const [dateSelector, setStartDate] = useState("2019-10-01");

  return (
    <div className="dateSelectorContainer">
      <h4>Select A Date</h4>
      <input
        className="data-picker"
        type="date"
        value={props.dateSelector}
        onChange={e => props.setDateSelector(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
