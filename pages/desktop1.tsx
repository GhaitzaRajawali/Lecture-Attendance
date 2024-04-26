import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./desktop11.module.css";

const Desktop1: NextPage = () => {
  const router = useRouter();

  const onLoginBtnContainerClick = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  const onRegisterTextClick = useCallback(() => {
    router.push("/desktop8");
  }, [router]);

  return (
    <div className={styles.loginAdmin}>
      <img className={styles.loginAdminChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.loginAdminItem} />
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
      </div>
      <div className={styles.password}>
        <div className={styles.rectangle} />
        <b className={styles.password1}>password</b>
        <img className={styles.lockIcon} alt="" src="/lock.svg" />
      </div>
      <div className={styles.warning}>
        <div className={styles.rectangle3} />
        <b className={styles.masukkanUsernameDan}>
          Masukkan Username dan Password FOR ADMIN
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

export default Desktop1;
