import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingAnim() {
  const words = ["नमस्ते", "Hello", "やあ"];
  const [index, setIndex] = useState(0);

  const opacity = {
    initial: {
      opacity: 0,
    },

    enter: {
      opacity: 0.85,
      transition: { duration: 1.2, delay: 0.2 },
    },
  };


  useEffect(() => {
    if (words == index.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1200 : 500
    );
    return () => clearTimeout();
  }, [index]);

  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={"h-screen w-screen bg-black z-50 fixed flex flex-col items-center justify-center	loader"}
    >
      <motion.p initial="initial" variants={opacity} animate="enter">
        <span className="bounceball"></span>
        <span className="text-5xl font-bold text-white">{words[index]}</span>
      </motion.p>
    </motion.div>
  );
}
