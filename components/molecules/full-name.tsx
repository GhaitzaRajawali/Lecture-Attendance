import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../organism/full-name.module.css";

export type FullNameType = {
  className?: string;
};

const FullName: NextPage<FullNameType> = ({ className = "" }) => {
  const router = useRouter();

  const onRegisterBtnContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={[styles.fullName, className].join(" ")}>
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
