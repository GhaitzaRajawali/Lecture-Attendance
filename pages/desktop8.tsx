import type { NextPage } from "next";
import FullName from "../components/full-name";
import styles from "./desktop8.module.css";

const Desktop8: NextPage = () => {
  return (
    <div className={styles.register}>
      <img className={styles.registerChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.registerItem} />
      <FullName />
      <div className={styles.nim}>
        <div className={styles.rectangle} />
        <b className={styles.nim1}>nim</b>
      </div>
      <div className={styles.username}>
        <div className={styles.rectangle} />
        <b className={styles.username1}>username</b>
      </div>
      <div className={styles.password}>
        <div className={styles.rectangle} />
        <b className={styles.password1}>password</b>
      </div>
      <div className={styles.warning}>
        <div className={styles.rectangle3} />
        <b className={styles.masukkanDataUntuk}>Masukkan Data untuk Daftar</b>
      </div>
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-1@2x.png"
      />
    </div>
  );
};

export default Desktop8;
