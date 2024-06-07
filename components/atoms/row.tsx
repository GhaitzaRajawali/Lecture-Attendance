import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "../organism/row.module.css";

export type RowType = {
  className?: string;
  showCell?: boolean;

  /** Style props */
  rowWidth?: CSSProperties["width"];
  rowBackgroundColor?: CSSProperties["backgroundColor"];
  rowPosition?: CSSProperties["position"];
  rowTop?: CSSProperties["top"];
  rowLeft?: CSSProperties["left"];
  rowBorderRadius?: CSSProperties["borderRadius"];
  rowBoxShadow?: CSSProperties["boxShadow"];
  rowBorder?: CSSProperties["border"];
  rowHeight?: CSSProperties["height"];
  cellBackgroundColor?: CSSProperties["backgroundColor"];
  cellBorderTop?: CSSProperties["borderTop"];
  cellBorderLeft?: CSSProperties["borderLeft"];
  cellMixBlendMode?: CSSProperties["mixBlendMode"];
  textFontSize?: CSSProperties["fontSize"];
  textFontWeight?: CSSProperties["fontWeight"];
  textFontFamily?: CSSProperties["fontFamily"];
  textTextAlign?: CSSProperties["textAlign"];
  cellWidth?: CSSProperties["width"];
  cellBackgroundColor1?: CSSProperties["backgroundColor"];
  cellBorderTop1?: CSSProperties["borderTop"];
  cellBorderLeft1?: CSSProperties["borderLeft"];
  contentAlignSelf?: CSSProperties["alignSelf"];
  contentOverflow?: CSSProperties["overflow"];
  contentWidth?: CSSProperties["width"];
  textFontSize1?: CSSProperties["fontSize"];
  textFontWeight1?: CSSProperties["fontWeight"];
  textFontFamily1?: CSSProperties["fontFamily"];
  textTextAlign1?: CSSProperties["textAlign"];
  cellBackgroundColor2?: CSSProperties["backgroundColor"];
  cellBorderTop2?: CSSProperties["borderTop"];
  cellBorderLeft2?: CSSProperties["borderLeft"];
  textFontSize2?: CSSProperties["fontSize"];
  textFontWeight2?: CSSProperties["fontWeight"];
  textFontFamily2?: CSSProperties["fontFamily"];
  textTextAlign2?: CSSProperties["textAlign"];
};

const Row: NextPage<RowType> = ({
  className = "",
  showCell,
  rowWidth,
  rowBackgroundColor,
  rowPosition,
  rowTop,
  rowLeft,
  rowBorderRadius,
  rowBoxShadow,
  rowBorder,
  rowHeight,
  cellBackgroundColor,
  cellBorderTop,
  cellBorderLeft,
  cellMixBlendMode,
  textFontSize,
  textFontWeight,
  textFontFamily,
  textTextAlign,
  cellWidth,
  cellBackgroundColor1,
  cellBorderTop1,
  cellBorderLeft1,
  contentAlignSelf,
  contentOverflow,
  contentWidth,
  textFontSize1,
  textFontWeight1,
  textFontFamily1,
  textTextAlign1,
  cellBackgroundColor2,
  cellBorderTop2,
  cellBorderLeft2,
  textFontSize2,
  textFontWeight2,
  textFontFamily2,
  textTextAlign2,
}) => {
  const rowStyle: CSSProperties = useMemo(() => {
    return {
      width: rowWidth,
      backgroundColor: rowBackgroundColor,
      position: rowPosition,
      top: rowTop,
      left: rowLeft,
      borderRadius: rowBorderRadius,
      boxShadow: rowBoxShadow,
      border: rowBorder,
      height: rowHeight,
    };
  }, [
    rowWidth,
    rowBackgroundColor,
    rowPosition,
    rowTop,
    rowLeft,
    rowBorderRadius,
    rowBoxShadow,
    rowBorder,
    rowHeight,
  ]);

  const cellStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: cellBackgroundColor,
      borderTop: cellBorderTop,
      borderLeft: cellBorderLeft,
      mixBlendMode: cellMixBlendMode,
    };
  }, [cellBackgroundColor, cellBorderTop, cellBorderLeft, cellMixBlendMode]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: textFontSize,
      fontWeight: textFontWeight,
      fontFamily: textFontFamily,
      textAlign: textTextAlign,
    };
  }, [textFontSize, textFontWeight, textFontFamily, textTextAlign]);

  const cell1Style: CSSProperties = useMemo(() => {
    return {
      width: cellWidth,
      backgroundColor: cellBackgroundColor1,
      borderTop: cellBorderTop1,
      borderLeft: cellBorderLeft1,
    };
  }, [cellWidth, cellBackgroundColor1, cellBorderTop1, cellBorderLeft1]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contentAlignSelf,
      overflow: contentOverflow,
      width: contentWidth,
    };
  }, [contentAlignSelf, contentOverflow, contentWidth]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: textFontSize1,
      fontWeight: textFontWeight1,
      fontFamily: textFontFamily1,
      textAlign: textTextAlign1,
    };
  }, [textFontSize1, textFontWeight1, textFontFamily1, textTextAlign1]);

  const cell2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: cellBackgroundColor2,
      borderTop: cellBorderTop2,
      borderLeft: cellBorderLeft2,
    };
  }, [cellBackgroundColor2, cellBorderTop2, cellBorderLeft2]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: textFontSize2,
      fontWeight: textFontWeight2,
      fontFamily: textFontFamily2,
      textAlign: textTextAlign2,
    };
  }, [textFontSize2, textFontWeight2, textFontFamily2, textTextAlign2]);

  return (
    <div className={[styles.row, className].join(" ")} style={rowStyle}>
      <div className={styles.cell} style={cellStyle}>
        <div className={styles.content}>
          <div className={styles.text} style={textStyle} />
        </div>
      </div>
      <div className={styles.cell1} style={cell1Style}>
        <div className={styles.content} style={contentStyle}>
          <div className={styles.text} style={text1Style} />
        </div>
      </div>
      {showCell && (
        <div className={styles.cell2} style={cell2Style}>
          <div className={styles.content}>
            <div className={styles.text} style={text2Style} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
