import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

// styled component example
// const FormComponent = styled.div`
//   margin: 0.5rem 0;
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// &l input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }
// &.invalid input{
//   border-color: red;
//   background-color: #ffd7d7;
// } 
// &.invalid label{
//   color: red;
// } 
// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0)
    setIsValid(true)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label >Course Goal</label>
        <input
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
