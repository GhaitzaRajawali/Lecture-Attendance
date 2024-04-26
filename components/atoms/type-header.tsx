import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./type-header.module.css";

export type TypeHeaderType = {
  /** Style props */
  typeHeaderHeight?: CSSProperties["height"];
  typeHeaderFlex?: CSSProperties["flex"];
  typeHeaderWidth?: CSSProperties["width"];
  typeHeaderBackgroundColor?: CSSProperties["backgroundColor"];
  typeHeaderBorderTop?: CSSProperties["borderTop"];
  typeHeaderBorderLeft?: CSSProperties["borderLeft"];
  typeHeaderMixBlendMode?: CSSProperties["mixBlendMode"];
  contentAlignSelf?: CSSProperties["alignSelf"];
  contentOverflow?: CSSProperties["overflow"];
  contentWidth?: CSSProperties["width"];
  textFontSize?: CSSProperties["fontSize"];
  textFontWeight?: CSSProperties["fontWeight"];
  textFontFamily?: CSSProperties["fontFamily"];
  textTextAlign?: CSSProperties["textAlign"];
};

const TypeHeader: NextPage<TypeHeaderType> = ({
  typeHeaderHeight,
  typeHeaderFlex,
  typeHeaderWidth,
  typeHeaderBackgroundColor,
  typeHeaderBorderTop,
  typeHeaderBorderLeft,
  typeHeaderMixBlendMode,
  contentAlignSelf,
  contentOverflow,
  contentWidth,
  textFontSize,
  textFontWeight,
  textFontFamily,
  textTextAlign,
}) => {
  const typeHeaderStyle: CSSProperties = useMemo(() => {
    return {
      height: typeHeaderHeight,
      flex: typeHeaderFlex,
      width: typeHeaderWidth,
      backgroundColor: typeHeaderBackgroundColor,
      borderTop: typeHeaderBorderTop,
      borderLeft: typeHeaderBorderLeft,
      mixBlendMode: typeHeaderMixBlendMode,
    };
  }, [
    typeHeaderHeight,
    typeHeaderFlex,
    typeHeaderWidth,
    typeHeaderBackgroundColor,
    typeHeaderBorderTop,
    typeHeaderBorderLeft,
    typeHeaderMixBlendMode,
  ]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: contentAlignSelf,
      overflow: contentOverflow,
      width: contentWidth,
    };
  }, [contentAlignSelf, contentOverflow, contentWidth]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: textFontSize,
      fontWeight: textFontWeight,
      fontFamily: textFontFamily,
      textAlign: textTextAlign,
    };
  }, [textFontSize, textFontWeight, textFontFamily, textTextAlign]);

  return (
    <div className={styles.typeheader} style={typeHeaderStyle}>
      <div className={styles.content} style={content1Style}>
        <div className={styles.text} style={text3Style} />
      </div>
    </div>
  );
};

export default TypeHeader;
