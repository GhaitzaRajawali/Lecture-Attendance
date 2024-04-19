import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import DescLecture from "../components/desc-lecture";
import styles from "./desktop3.module.css";

const Desktop3: NextPage = () => {
  const router = useRouter();

  const onPhstudentBoldIconClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.desktop4}>
      <img className={styles.desktop4Child} alt="" src="/rectangle-11.svg" />
      <div className={styles.desktop4Item} />
      <img
        className={styles.phstudentBoldIcon}
        alt=""
        src="/phstudentbold.svg"
        onClick={onPhstudentBoldIconClick}
      />
      <img
        className={styles.iconParkOutlinelogout}
        alt=""
        src="/iconparkoutlinelogout.svg"
        onClick={onIconParkOutlinelogoutClick}
      />
      <img
        className={styles.lucidefileSpreadsheetIcon}
        alt=""
        src="/lucidefilespreadsheet.svg"
      />
      <Header
        dASHBOARD="LECTURE"
        messageSquareIconTop="1.5px"
        messageSquareIconLeft="-66px"
        messageSquareIconDisplay="flex"
        messageSquareIconWidth="186px"
        messageSquareIconHeight="35px"
      />
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-1@2x.png"
      />
      <img
        className={styles.polinemaLogo2Icon}
        alt=""
        src="/polinemalogo-2@2x.png"
      />
      <DescLecture propTop="140px" />
    </div>
  );
};

export default Desktop3;
