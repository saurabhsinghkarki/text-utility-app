import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase" , "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase" , "success");

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared" , "success");

  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied succesfully" , "success");

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed" , "success");

  };
  return (
    <div >
      <div className="container">
        <h1>
          {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          handle Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your summary text</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
