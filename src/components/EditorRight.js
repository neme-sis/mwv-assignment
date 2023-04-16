import React from "react";
import { ReactComponent as CopyIcon } from "../assets/copy.svg";
import { outputHighlights } from "../data/options";

const EditorRight = ({ dataSummary, optionIndex }) => {
  const copyText = () => {
    let s = "";
    dataSummary.map((e) => (s += e + "\n"));
    window.navigator.clipboard.writeText(s);
  };

  return (
    <div className="editor-modal-right">
      <div className="output-title">
        <div className="point-arrow point-arrow-dark">{">"}</div>
        <p>{outputHighlights[optionIndex].title}</p>
      </div>
      <p className="output-desc">{outputHighlights[optionIndex].desc}</p>
      <div className="explain-summary">
        {dataSummary.map((item, i) => (
          <div className="output-summary" key={i}>
            <div className="point-arrow">{">"}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="copy-output-btn" onClick={copyText}>
        <CopyIcon fill="#3c3c3c" />
        <p>Copy Output</p>
      </div>
    </div>
  );
};

export default EditorRight;
