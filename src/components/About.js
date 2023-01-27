// import React, { useState } from "react";

export default function About(props) {
  // const [mode, setMode] = useState("bhai bhai");
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });
  let myStyl = {
    color: props.mode === "dark" ? "white" : "#212121",
    backgroundColor: props.mode === "dark" ? "#212121" : "white",
    // border:'2px solid',
    borderColor: props.mode === "dark" ? "white" : "#212121",
  };
  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setBtnText("Enable White Mode");
  //   } else {
  //     setMyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  return (
    <>
      <div className="container my-5" style={myStyl}>
        <h2 className="my-4">About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyl}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyl}
              >
                Analyse Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Text Tools</strong> gives you a way to analyse your text
                quickly and effectly.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyl}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyl}
              >
                Free To Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Text Tools</strong> is free to use for anyone in this
                world.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyl}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyl}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Text Tools </strong> can be used on any browser and on
                any machine as per your requirement and ease.
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary my-3" onClick={toggleStyle}>
          {btnText}
        </button> */}
      </div>
    </>
  );
}
