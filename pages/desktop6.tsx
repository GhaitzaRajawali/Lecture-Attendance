import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/atoms/header";
import styles from "./desktop6.module.css";

const Desktop6: NextPage = () => {
  const router = useRouter();

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  return (
    <div className={styles.addLecturer}>
      <img className={styles.addLecturerChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.addLecturerItem} />
      <img
        className={styles.phstudentBoldIcon}
        alt=""
        src="/phstudentbold2.svg"
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
        src="/lucidefilespreadsheet4.svg"
      />
      <Header
        dASHBOARD="ADMIN"
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
      <div className={styles.rectangleParent} onClick={onFrameContainerClick}>
        <div className={styles.frameChild} />
        <b className={styles.save}>
          Sav
          <span className={styles.e}>e</span>
        </b>
        <img className={styles.iconTick} alt="" src="/-icon-tick.svg" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <b className={styles.editPage}>Edit Page</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <b className={styles.lectureName}>{`Lecture Name : `}</b>
      </div>
      <div className={styles.typeHereWrapper}>
        <b className={styles.typeHere}>Type Here</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameInner} />
        <b className={styles.lectureName}>Room :</b>
      </div>
      <div className={styles.typeHereContainer}>
        <b className={styles.typeHere}>Type Here</b>
      </div>
    </div>
  );
};

export default Desktop6;
