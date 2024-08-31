/* Dependencies */
import React from "react";

const Button = ({
  customClass,
  type = "primary",
  text = "Lorem Ipsum",
  href = null,
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

  return href !== null ? (
    <a className={`${customClass} button ${buttonType} themed`} href={href}>
      <span>{text}</span>
      {icon !== null ? icon : null}
    </a>
  ) : (
    <button className={`${customClass} button ${buttonType} themed`}>
      <span>{text}</span>
      {icon !== null ? icon : null}
    </button>
  );
};

export default Button;
