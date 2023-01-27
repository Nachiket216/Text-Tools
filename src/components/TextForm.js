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
      <div className="container my-5"></div>

      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="my-3">{props.heading}</h1>
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleSentenceCase}
        >
          Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-1 `}
          onClick={handleClearText}
        >
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
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
