/* Dependencies */
import React, { useEffect } from "react";
import { motion, inView, useAnimate } from "framer-motion";

const EntranceAnimation = ({ children }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    inView(
      scope.current,
      ({ target }) => {
        animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.8 });
      },
      { amount: "some" }
    );
  }, [animate]);

  return (
    <motion.div ref={scope} initial={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default EntranceAnimation;
