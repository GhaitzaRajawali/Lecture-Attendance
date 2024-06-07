import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "../organism/master.module.css";

export type MasterType = {
  className?: string;
  inRoom?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];

  /** Action props */
  onMasterContainer6Click?: () => void;
};

const Master: NextPage<MasterType> = ({
  className = "",
  inRoom,
  propTop,
  propLeft,
  onMasterContainer6Click,
}) => {
  const masterStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={[styles.master, className].join(" ")}
      style={masterStyle}
      onClick={onMasterContainer6Click}
    >
      <div className={styles.splash111} />
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-7@2x.png" />
        <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <b className={styles.inRoom}>{inRoom}</b>
        </div>
        <div className={styles.frame211} />
      </div>
    </div>
  );
};

export default Master;
