import styles from "./back-to-top.module.css";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  return (
    <a href="#" className={styles["back-to-top"]}>
      <ArrowUp size={24} />
    </a>
  );
};
