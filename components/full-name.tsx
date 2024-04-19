import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./full-name.module.css";

const FullName: NextPage = () => {
  const router = useRouter();

  const onRegisterBtnContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.fullName}>
      <div className={styles.rectangle} />
      <b className={styles.fullName1}>Full name</b>
      <div className={styles.registerBtn} onClick={onRegisterBtnContainerClick}>
        <div className={styles.rectangle1} />
        <b className={styles.register}>Register</b>
      </div>
    </div>
  );
};

export default FullName;
