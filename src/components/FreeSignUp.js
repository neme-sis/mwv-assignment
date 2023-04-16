import React from "react";
import "../styles/FreeSignUp.css";
import { ReactComponent as SignUpIcon } from "../assets/invite.svg";

const FreeSignUp = ({ theme }) => {
  return (
    <div
      className="sign-up-btn"
      style={{
        background:
          theme !== "purple"
            ? "#fff"
            : "linear-gradient(90deg, #795efd, #3619c9)",
      }}
    >
      <SignUpIcon
        fill={theme === "purple" ? "#fff" : "#381BCB"}
        width={theme === "purple" ? 15 : 20}
        height={theme === "purple" ? 15 : 20}
      />
      <p
        className="sign-up-text"
        style={{ color: theme === "purple" ? "#fff" : "#381BCB" }}
      >
        Free Signup
      </p>
    </div>
  );
};

export default FreeSignUp;
