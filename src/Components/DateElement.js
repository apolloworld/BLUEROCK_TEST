import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: gray;
`;

const DateInput = styled.input`
  font-size: 20px;
  border-width: 0px;
  border-bottom-width: 2px;
  border-color: lightgray;
`;

const DateElement = ({ elementInfo, elementData }) => {
  const [inputVal, setInputVal] = useState(
    moment(new Date(elementData)).format("YYYY-MM-DD")
  );

  const hanldeChange = (e) => {
    setInputVal(e.target.value);
    console.log(typeof e.target.value);
  };

  return (
    <div>
      <DateInput type="date" value={inputVal} onChange={hanldeChange} />
      <Label>{elementInfo.label}</Label>
    </div>
  );
};

DateElement.propTypes = {
  elementInfo: PropTypes.object,
  elementData: PropTypes.string,
};
export default DateElement;
