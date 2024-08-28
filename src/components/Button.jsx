/* Dependencies */
import React from "react";

const Button = ({
  customClass,
  type = "primary",
  text = "Lorem Ipsum",
  icon = null,
}) => {
  let buttonType = type;

  switch (type) {
    case "primary":
      buttonType = "button--primary";
      break;
    case "secondary":
      buttonType = "button--secondary";
      break;
  }

  return (
    <button className={`${customClass} button ${buttonType}`}>
      <span>{text}</span>
      {icon !== null ? icon : null}
    </button>
  );
};

export default Button;
