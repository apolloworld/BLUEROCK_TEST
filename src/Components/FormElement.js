import React from "react";
import CommandElement from "./CommandElement";
import DateElement from "./DateElement";
import TextElement from "./TextElement";
import PropTypes from "prop-types";

const FormElement = ({ elementInfo, elementData }) => {
  const getElementBody = () => {
    switch (elementInfo.component) {
      case "Text":
        return (
          <TextElement elementInfo={elementInfo} elementData={elementData} />
        );
      case "Date":
        return (
          <DateElement elementInfo={elementInfo} elementData={elementData} />
        );
      case "Command":
        return (
          <CommandElement elementInfo={elementInfo} elementData={elementData} />
        );
      default:
        return <div>Not Element</div>;
    }
  };
  return (
    <div style={{ paddingTop: 5, paddingBottom: 5 }}>{getElementBody()}</div>
  );
};

FormElement.propTypes = {
  elementInfo: PropTypes.object,
  elementData: PropTypes.any,
};
export default FormElement;
