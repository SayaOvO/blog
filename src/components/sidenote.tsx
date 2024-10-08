import styles from "./sidenote.module.css";

export const SideNote = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className={`${styles.aside} br-1 bg-accent p-4 shadow-md`}>{children}</aside>
  );
};
