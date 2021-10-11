import React from "react";
import { ReactElement } from "react";
import styles from "./PreviewOverlay.module.scss";
import { PreviewOverlayProps } from "./PreviewOverlay.types";

const PreviewOverlay = (props: PreviewOverlayProps): ReactElement => {
  const { show, children, onClose, onCircleThrough } = props;

  const onCloseHandler = () => {
    onClose();
  };

  const onPreviousHandler = () => {
  console.log('onPreviousHandler')
	onCircleThrough(-1);
  }

  const onNextHandler = () => {
  console.log('onNextHandler')
	onCircleThrough(1);
  }


  return (
    <div className={show ? styles.Preview : styles.PreviewHidden}>
      <div className={styles.Close} onClick={onCloseHandler}>
        X
      </div>
      <div className={styles.ArrowLeft} onClick={onPreviousHandler}>{"<"}</div>
      <div className={styles.Item}>{children}</div>
      <div className={styles.ArrowRight} onClick={onNextHandler}>{">"}</div>
    </div>
  );
};

export default PreviewOverlay;
