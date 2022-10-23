import React from "react";
import "./style.scss";

function PrimaryButton(props) {
  const { label, onClick, btnType, classes } = props;
  return (
    <button
      className={`primary__button__filled ${classes}`}
      type={btnType}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
