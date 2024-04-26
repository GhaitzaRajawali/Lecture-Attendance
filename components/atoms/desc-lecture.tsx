import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./desc-lecture.module.css";

export type DescLectureType = {
  /** Style props */
  propTop?: CSSProperties["top"];

  /** Action props */
  onDescLecture4Click?: () => void;
};

const DescLecture: NextPage<DescLectureType> = ({
  propTop,
  onDescLecture4Click,
}) => {
  const descLecture1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={styles.descLecture1}
      style={descLecture1Style}
      onClick={onDescLecture4Click}
    >
      <div className={styles.descLecture1Child} />
      <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
      <img className={styles.descLecture1Item} alt="" src="/ellipse-7@2x.png" />
      <b className={styles.lectureDesciption}>Lecture Desciption</b>
    </div>
  );
};

export default DescLecture;
