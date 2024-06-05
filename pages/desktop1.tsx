import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/atoms/header";
import Master from "../components/atoms/master";
import styles from "./desktop1.module.css";

const Desktop11: NextPage = () => {
  const router = useRouter();

  const onPhstudentBoldIconClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.lecturerList}>
      <img className={styles.lecturerListChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.lecturerListItem} />
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
      <Header dASHBOARD="DASHBOARD" />
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-11@2x.png"
      />
      <div className={styles.master}>
        <div className={styles.splash111} />
        <div className={styles.splash112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>Outside</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <div className={styles.master1}>
        <div className={styles.splash111} />
        <div className={styles.splash112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>Outside</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <Master inRoom="In Room" />
      <div className={styles.master2}>
        <div className={styles.splash1112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>In Room</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <div className={styles.master3}>
        <div className={styles.splash1112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>In Room</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <div className={styles.master4}>
        <div className={styles.splash1112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>In Room</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <div className={styles.master5}>
        <div className={styles.splash1112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>In Room</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <div className={styles.master6}>
        <div className={styles.splash1112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>In Room</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <div className={styles.master7}>
        <div className={styles.splash1112} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
          <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupItem} />
            <b className={styles.outside}>In Room</b>
          </div>
          <div className={styles.frame211} />
        </div>
      </div>
      <img
        className={styles.polinemaLogo2Icon}
        alt=""
        src="/polinemalogo-2@2x.png"
      />
    </div>
  );
};

export default Desktop11;
