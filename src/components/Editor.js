import React, { useState } from "react";
import "../styles/Editor.css";
import EditorLeft from "./EditorLeft";
import EditorRight from "./EditorRight";
import { options } from "../data/options";
import FreeSignUp from "./FreeSignUp";
import shape1 from "../assets/shape1.png";

const showCaseData = [
  "The code above is a function definition",
  "It defines a new function called HelloWorld that takes a single argument called 'text'.",
  "The body of the function is a single line of code that prints out the value of 'text' if it is defined, or 'Hello World' if it is not defined",
];

const Editor = () => {
  const [value, setValue] = React.useState(
    `function HelloWorld(text){
    echo text || "Hello World";
}`
  );
  const [optionIndex, setOptionIndex] = useState(0);
  const [dataSummary, setDataSummary] = useState(showCaseData);
  return (
    <div className="editor-wrapper">
      <div className="editor-wrapper-background">
        <img src={shape1} alt="" className="editor-wrapper-background-img"/>
        <div></div>
        <div></div>
      </div>
      <div className="editor-modal-wrapper">
        <div className="editor-modal">
          <EditorLeft
            optionIndex={optionIndex}
            value={value}
            setValue={setValue}
            setDataSummary={setDataSummary}
          />
          <EditorRight dataSummary={dataSummary} optionIndex={optionIndex} />
        </div>
        <div className="transform-options">
          {options.map(({ Icon, name }, i) => (
            <div
              className={`transform-option ${
                i !== optionIndex ? "transform-option-inactive" : ""
              }`}
              key={i}
              onClick={() => {
                setOptionIndex(i);
                setValue("");
                setDataSummary([]);
              }}
            >
              <Icon fill="#381BCB" width={25} height={30} />
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className="free-sign-up">
          <FreeSignUp />
        </div>
      </div>
    </div>
  );
};

export default Editor;
