import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./header.module.css";

export type HeaderType = {
  dASHBOARD?: string;

  /** Style props */
  messageSquareIconTop?: CSSProperties["top"];
  messageSquareIconLeft?: CSSProperties["left"];
  messageSquareIconDisplay?: CSSProperties["display"];
  messageSquareIconWidth?: CSSProperties["width"];
  messageSquareIconHeight?: CSSProperties["height"];
};

const Header: NextPage<HeaderType> = ({
  dASHBOARD,
  messageSquareIconTop,
  messageSquareIconLeft,
  messageSquareIconDisplay,
  messageSquareIconWidth,
  messageSquareIconHeight,
}) => {
  const dASHBOARDStyle: CSSProperties = useMemo(() => {
    return {
      top: messageSquareIconTop,
      left: messageSquareIconLeft,
      display: messageSquareIconDisplay,
      width: messageSquareIconWidth,
      height: messageSquareIconHeight,
    };
  }, [
    messageSquareIconTop,
    messageSquareIconLeft,
    messageSquareIconDisplay,
    messageSquareIconWidth,
    messageSquareIconHeight,
  ]);

  return (
    <div className={styles.headerheader}>
      <div className={styles.div}>
        <div className={styles.a} />
      </div>
      <div className={styles.form}>
        <div className={styles.div1}></div>
        <b className={styles.dashboard} style={dASHBOARDStyle}>
          {dASHBOARD}
        </b>
      </div>
      <div className={styles.ul}>
        <div className={styles.a1}>
          <img className={styles.bellIcon} alt="" src="/bell.svg" />
          <div className={styles.span} />
        </div>
        <div className={styles.a1}>
          <img className={styles.bellIcon} alt="" src="/messagesquare.svg" />
          <div className={styles.span1} />
        </div>
        <div className={styles.a3}>
          <img
            className={styles.profileImgjpgIcon}
            alt=""
            src="/profileimgjpg@2x.png"
          />
          <div className={styles.span2}>
            <div className={styles.praful}>Praful</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
