/* Dependencies */
import React from "react";

const Button = ({
  customClass,
  type = "primary",
  text = "Lorem Ipsum",
  href = null,
  scrollTo = null,
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

  const handleScrollTo = (scrollTo) => {
    document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth" });
  };

  if (href !== null) {
    // Regular link
    return (
      <a
        className={`${customClass} button ${buttonType} themed`}
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
        className={`${customClass} button ${buttonType} themed`}
        onClick={() => handleScrollTo(scrollTo)}
      >
        <span>{text}</span>
        {icon !== null ? icon : null}
      </button>
    );
  } else {
    // Regular button
    return (
      <button className={`${customClass} button ${buttonType} themed`}>
        <span>{text}</span>
        {icon !== null ? icon : null}
      </button>
    );
  }
};

export default Button;
