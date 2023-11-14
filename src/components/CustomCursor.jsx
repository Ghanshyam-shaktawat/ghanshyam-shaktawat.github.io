import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [initial, setInitial] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVarient, setCursorVarient] = useState("hidden");
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  const cursor = useRef();
  const size = 30;
  const variants = {
    default: {
      width: `${size}px`,
      height: `${size}px`,
      mixBlendMode: "difference",
      opacity: 1,
    },

    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const addEventListener = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
      document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    };

    const removeEventListener = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
      document.removeEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    };

    const mMove = (e) => {
      setCursorVarient("default");
      setPosition({ x: e.clientX, y: e.clientY });
      setInitial(true)
    };

    const mLeave = () => {
      setCursorVarient("hidden");
    };

    const mEnter = () => {
      setCursorVarient("default");
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("#big-cursor").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListener();
    addLinkEvents();
    return () => removeEventListener();
  }, []);

  return (
      <motion.div
        className={
          (initial ? "cursor " : ' ') + (linkHover ? "hover " : " ") + (click ? "click " : " ")
        }
        ref={cursor}
        style={{ top: position.y - size / 2, left: position.x - size / 2 }}
        variants={variants}
        animate={cursorVarient}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
  );
}
