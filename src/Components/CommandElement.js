import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Command = styled.button`
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 15px;
  border-width: 0;
  margin-top: 20px;
`;

const CommandElement = ({ elementInfo, elementData }) => {
  return <Command>{elementInfo.text}</Command>;
};

CommandElement.propTypes = {
  elementInfo: PropTypes.object,
  elementData: PropTypes.any,
};

export default CommandElement;
