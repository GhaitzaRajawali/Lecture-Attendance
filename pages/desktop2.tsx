import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/atoms/header";
import DescLecture from "../components/atoms/desc-lecture";
import styles from "./desktop2.module.css";

const Desktop2: NextPage = () => {
  const router = useRouter();

  const onDescLecture4Click = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLucidefileSpreadsheetIconClick = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  return (
    <div className={styles.lecturerDesc}>
      <img
        className={styles.lecturerDescChild}
        alt=""
        src="/rectangle-11.svg"
      />
      <div className={styles.lecturerDescItem} />
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
      <DescLecture propTop="341px" />
      <DescLecture propTop="542px" />
      <DescLecture propTop="743px" onDescLecture4Click={onDescLecture4Click} />
    </div>
  );
};

export default Desktop2;
