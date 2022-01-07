import useBasicInput from "./hooks/use-BasicInput";
import { useState } from "react";
const BasicForm = (props) => {
  
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    InputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useBasicInput((value) => value.trim() !== "");
  const {
    value: enteredMessage,
    hasError: messageHasError,
    isValid: messageIsValid,
    InputBlurHandler: messageBlurHandler,
    inputChangeHandler: messageChangeHandler,
    reset: resetMessage,
  } = useBasicInput((value) => value.trim() !== "" && value.length >= 5);
  const {
    value: enteredDetail,
    hasError: detailHasError,
    isValid: detailIsValid,
    InputBlurHandler: detailBlurHandler,
    inputChangeHandler: detailChangeHandler,
    reset: resetDetail,
  } = useBasicInput((value) => value.trim() !== "" && value.length >= 5);
  let formIsValid = false;

  const {
    value: enteredLastname,
    hasError: lastnameHasError,
    isValid: lastnameIsValid,
    InputBlurHandler: lastnameBlurHandler,
    inputChangeHandler: lastnameChangeHandler,
    reset: resetLastname,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    InputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useBasicInput((value) => value.includes("@"));
  if (nameIsValid && lastnameIsValid && emailIsValid && messageIsValid && detailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid && !lastnameIsValid && !emailIsValid && !messageIsValid && !detailIsValid) {
      return;
    }
    const enteredFormData = {
      id:enteredName,
      name:enteredName,
      lastname:enteredLastname,
      email:enteredEmail,
      message:enteredMessage,
      detail:enteredDetail
    };
    
     
    
    props.onAdd(enteredFormData);
    props.isLodingTrue();
    resetName();
    resetLastname();
    resetEmail();
    resetDetail();
    resetMessage();
  };
  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control ";
  const lastnameInputClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control ";
  const messageInputClasses = messageHasError
    ? "form-control invalid"
    : "form-control ";
    const detailInputClasses = detailHasError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {nameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastname}
            onBlur={lastnameBlurHandler}
            onChange={lastnameChangeHandler}
          />
          {lastnameHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">enter currect email</p>}
      </div>
      <div className={messageInputClasses}>
        <label htmlFor="message">Message</label>
        <textarea
          rows="5"
          value={enteredMessage}
          onBlur={messageBlurHandler}
          onChange={messageChangeHandler}
        ></textarea>
        {messageHasError && <p className="error-text">enter currect message(contail more than 5 char)</p>}
      </div>
      <div className={detailInputClasses}>
        <label htmlFor="additionalDetail">AdditionalDetail</label>
        <textarea  rows="5" value={enteredDetail}  onBlur={ detailBlurHandler} onChange={detailChangeHandler}></textarea>
        {detailHasError && <p className="error-text">enter currect detail(contail more than 5 char)</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
       
      </div>
    </form>
  );
};

export default BasicForm;
