import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: gray;
`;

const TextInput = styled.input`
  font-size: 20px;
  border-width: 0px;
  border-bottom-width: 2px;
  border-color: lightgray;
`;

const TextElement = ({ elementInfo, elementData }) => {
  const [inputVal, setInputVal] = useState(elementData);

  const hanldeChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <TextInput type="text" value={inputVal} onChange={hanldeChange} />
      <Label>{elementInfo.label}</Label>
    </div>
  );
};
TextElement.propTypes = {
  elementInfo: PropTypes.object,
  elementData: PropTypes.string,
};

export default TextElement;
