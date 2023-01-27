import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleSentenceCase = () => {
    let newText = text.toLowerCase();
    newText = newText.split(" ");
    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"></div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
            value={text}
            onChange={handleOnChange}
            className={`form-control `}
            id="myBox"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>
          Sentence Case
        </button>
        <button className="btn btn-dark mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the text box above to preview it here"}</p>
      </div>
    </>
  );
}
