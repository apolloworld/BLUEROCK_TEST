import React from "react";
import FormElement from "./FormElement";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 20px;
`;

const FormTitle = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Form = ({ info, data }) => {
  return (
    <FormContainer>
      <FormTitle>{info.title}</FormTitle>
      <div>
        {info.children &&
          Object.keys(info.children).map((elementKey) => (
            <FormElement
              elementInfo={info.children[elementKey]}
              elementData={data[info.children[elementKey].path]}
            />
          ))}
      </div>
    </FormContainer>
  );
};
Form.propTypes = {
  info: PropTypes.object,
  data: PropTypes.object,
};

export default Form;
