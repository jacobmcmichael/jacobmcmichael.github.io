/* Dependencies */
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

const ScaleOnHover = ({ children }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const element = scope.current;

    const handleMouseEnter = () => {
      animate(element, { scale: 1.1 }, { duration: 0.3 });
    };

    const handleMouseLeave = () => {
      animate(element, { scale: 1 }, { duration: 0.3 });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animate]);

  return <div ref={scope}>{children}</div>;
};

export default ScaleOnHover;
