/* Dependencies */
import React from "react";

const Button = ({
  customClass = "",
  type = "",
  text = "Lorem Ipsum",
  href = null,
  scrollTo = null,
  icon = null,
}) => {
  let buttonType = type;

  switch (type) {
    case "plain":
      buttonType = "button button--plain";
      break;
    case "primary":
      buttonType = "button button--primary";
      break;
    case "secondary":
      buttonType = "button button--secondary";
      break;
    default:
      buttonType = "";
      break;
  }

  let classes = [customClass, buttonType, "themed"].filter(Boolean).join(" ");

  const handleScrollTo = (selector) => {    
    if (typeof selector === "string") {
      let element = document.querySelector(selector);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else if (typeof selector === "number") {
      window.scrollTo({ top: selector });
    }
  };

  if (href !== null) {
    // Regular link
    return (
      <a
        className={classes}
        onClick={() => handleScrollTo(scrollTo)}
        href={href}
      >
        <span>{text}</span>
        {icon !== null ? icon : null}
      </a>
    );
  } else if (scrollTo !== null) {
    // Pseudo anchor link
    return (
      <button
        className={classes}
        onClick={() => handleScrollTo(scrollTo)}
      >
        <span>{text}</span>
        {icon !== null ? icon : null}
      </button>
    );
  } else {
    // Regular button
    return (
      <button className={classes}>
        <span>{text}</span>
        {icon !== null ? icon : null}
      </button>
    );
  }
};

export default Button;
