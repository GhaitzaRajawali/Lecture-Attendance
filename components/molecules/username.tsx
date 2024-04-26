import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./username.module.css";

const Username: NextPage = () => {
  const router = useRouter();

  const onLoginBtnContainerClick = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  const onRegisterTextClick = useCallback(() => {
    router.push("/desktop8");
  }, [router]);

  const onAdminTextClick = useCallback(() => {
    router.push("/desktop8");
  }, [router]);

  return (
    <div className={styles.username}>
      <div className={styles.rectangle} />
      <b className={styles.username1}>Username</b>
      <img className={styles.userIcon} alt="" src="/user.svg" />
      <div className={styles.loginBtn} onClick={onLoginBtnContainerClick}>
        <div className={styles.rectangle1} />
        <b className={styles.login}>login</b>
      </div>
      <b className={styles.forgotPassword}>Forgot password?</b>
      <b className={styles.register} onClick={onRegisterTextClick}>
        Register
      </b>
      <b className={styles.admin} onClick={onAdminTextClick}>
        Admin
      </b>
    </div>
  );
};

export default Username;
