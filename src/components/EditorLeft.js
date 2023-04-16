import React from "react";
import { ReactComponent as CopyIcon } from "../assets/copy.svg";
import { optionData, options } from "../data/options";
import { explanationsData } from "../data/explainationData";

const EditorLeft = ({ optionIndex, value, setValue, setDataSummary }) => {
  const { Icon, name } = options[optionIndex];
  return (
    <div className="editor-modal-left">
      <div className="explain-title">
        {<Icon fill="#000" height={40} width={40} />}
        <p>{name}</p>
      </div>
      <p className="explain-desc">{optionData[optionIndex].desc}</p>
      <p className="explain-function">
        Paste your {optionData[optionIndex].title} below:
      </p>
      <textarea
        className="user-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className="explain-btn"
        onClick={() => {
          // if (!value) return;
          setDataSummary(explanationsData[optionIndex]);
        }}
      >
        <CopyIcon />
        <p>Enhance with AI</p>
      </div>
    </div>
  );
};

export default EditorLeft;
