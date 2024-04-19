import type { NextPage } from "next";
import Username from "../components/username";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop1}>
      <img className={styles.desktop1Child} alt="" src="/rectangle-1.svg" />
      <div className={styles.desktop1Item} />
      <Username />
      <div className={styles.password}>
        <div className={styles.rectangle} />
        <b className={styles.password1}>password</b>
        <img className={styles.lockIcon} alt="" src="/lock.svg" />
      </div>
      <div className={styles.warning}>
        <div className={styles.rectangle1} />
        <b className={styles.masukkanUsernameDan}>
          Masukkan Username dan Password
        </b>
      </div>
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-1@2x.png"
      />
    </div>
  );
};

export default Desktop;
