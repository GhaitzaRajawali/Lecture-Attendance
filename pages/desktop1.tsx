import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import Master from "../components/master";
import styles from "./desktop1.module.css";

const Desktop1: NextPage = () => {
  const router = useRouter();

  const onMasterContainer6Click = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  const onPhstudentBoldIconClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.desktop2}>
      <img className={styles.desktop2Child} alt="" src="/rectangle-11.svg" />
      <div className={styles.desktop2Item} />
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
        src="/polinemalogo-1@2x.png"
      />
      <Master inRoom="In Room" />
      <Master inRoom="Outside" propTop="92px" propLeft="866px" />
      <Master inRoom="In Room" propTop="92px" propLeft="492px" />
      <Master inRoom="In Room" propTop="92px" propLeft="118px" />
      <Master inRoom="In Room" propTop="344px" propLeft="116px" />
      <Master inRoom="Outside" propTop="344px" propLeft="494px" />
      <Master
        inRoom="Outside"
        propTop="596px"
        propLeft="869px"
        onMasterContainer6Click={onMasterContainer6Click}
      />
      <Master inRoom="outside" propTop="596px" propLeft="118px" />
      <Master inRoom="In Room" propTop="596px" propLeft="496px" />
      <img
        className={styles.polinemaLogo2Icon}
        alt=""
        src="/polinemalogo-2@2x.png"
      />
    </div>
  );
};

export default Desktop1;
