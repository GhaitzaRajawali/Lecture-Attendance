import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/atoms/header";
import DescLecture from "../components/atoms/desc-lecture";
import styles from "./desktop2.module.css";

const Desktop2: NextPage = () => {
  const router = useRouter();

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLucidefileSpreadsheetIconClick = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  return (
    <div className={styles.lecturerDesc}>
      <img className={styles.lecturerDescChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.lecturerDescItem} />
      <img
        className={styles.phstudentBoldIcon}
        alt=""
        src="/phstudentbold1.svg"
      />
      <img
        className={styles.iconParkOutlinelogout}
        alt=""
        src="/iconparkoutlinelogout1.svg"
        onClick={onIconParkOutlinelogoutClick}
      />
      <img
        className={styles.lucidefileSpreadsheetIcon}
        alt=""
        src="/lucidefilespreadsheet1.svg"
        onClick={onLucidefileSpreadsheetIconClick}
      />
      <Header
        dASHBOARD="LECTURE LIST"
        messageSquareIconTop="1.5px"
        messageSquareIconLeft="-66px"
        messageSquareIconDisplay="flex"
        messageSquareIconWidth="186px"
        messageSquareIconHeight="35px"
      />
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-11@2x.png"
      />
      <img
        className={styles.polinemaLogo2Icon}
        alt=""
        src="/polinemalogo-2@2x.png"
      />
      <DescLecture />
      <div className={styles.descLecture2}>
        <div className={styles.descLecture2Child} />
        <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
        <img
          className={styles.descLecture2Item}
          alt=""
          src="/ellipse-7@2x.png"
        />
        <b className={styles.lectureDesciption}>Lecture Desciption</b>
        <div className={styles.descLecture1}>
          <div className={styles.descLecture2Child} />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <img
            className={styles.descLecture2Item}
            alt=""
            src="/ellipse-7@2x.png"
          />
          <b className={styles.lectureDesciption}>Lecture Desciption</b>
          <div className={styles.descLecture11}>
            <div className={styles.descLecture2Child} />
            <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
            <img
              className={styles.descLecture2Item}
              alt=""
              src="/ellipse-7@2x.png"
            />
            <b className={styles.lectureDesciption}>Lecture Desciption</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
