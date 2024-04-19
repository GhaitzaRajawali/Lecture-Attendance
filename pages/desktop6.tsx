import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
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
    <div className={styles.desktop7}>
      <img className={styles.desktop7Child} alt="" src="/rectangle-11.svg" />
      <div className={styles.desktop7Item} />
      <img
        className={styles.phstudentBoldIcon}
        alt=""
        src="/phstudentbold.svg"
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
        src="/polinemalogo-1@2x.png"
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
