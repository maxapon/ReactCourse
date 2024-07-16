import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";
import styles from "./styles.module.css";

export const ScrollBar = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = throttle(30, () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setPercent(scrolled);
    });
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={styles.scrollProgressBar}
      style={{ width: percent + "%" }}
    ></div>
  );
};
