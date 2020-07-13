import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import InputBox from "./InputBox"

const Wrapper = styled.form`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ErrorMessage = styled.div`
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  text-align: center;
  color: #ff2a2a;
`;

const useErrorCheck = (fields, errCondition) => {
    const errors = [];
  
    // true if empty
    fields.forEach(field => errors.push(errCondition(field)));
    // return errors in the same order
  
    return errors;
  };

const form = styled.button`
  padding: 15px 20px;
  background-color: ${({ theme }) => (theme ? theme.primaryColor : "#ef3e36")};
  color: ${({ theme }) => (theme ? theme.secondaryTextColor : "#fff")};
  margin: 10px 0px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border: ${({ theme }) => (theme ? theme.darkerColor : "#c21a11")};
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => (theme ? theme.darkerColor : "#c21a11")};
  }
`;

const NewBooKPage = () => {
    const theme = useContext(ThemeContext);
    const [invalidSubmit, setInvalidSubmit] = useState(false);
    const { title, context } = formValues;
    const setTitle = title =>setFormValues(prevState => ({ ...prevState, title }));
    const setContext = context => setFormValues(prevState => ({ ...prevState, context }));

    const [titleError, contextError] = useErrorCheck(
        [title, context],
        field => field.length === 0
    );


    const handleFormSubmit = e => {
        e.preventDefault();
        if ([categoryError, titleError, bodyError].includes(true)) {
          setInvalidSubmit(true);
        } else {
          handleSubmit();
        }
      };


    return(
        <div></div>
    );
}




