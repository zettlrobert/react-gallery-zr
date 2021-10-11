import React from "react";
import { ReactElement } from "react";
import styles from "./PreviewOverlay.module.scss";
import { PreviewOverlayProps } from "./PreviewOverlay.types";

const PreviewOverlay = (props: PreviewOverlayProps): ReactElement => {
  const { show, children, onClose } = props;

  const onCloseHandler = () => {
    onClose();
  };

  return (
    <div className={show ? styles.Preview : styles.PreviewHidden}>
      <div className={styles.Close} onClick={onCloseHandler}>
        X
      </div>
      <div className={styles.ArrowLeft}>{"<"}</div>
      <div>
        {children}
      </div>
      <div className={styles.ArrowRight}>{">"}</div>
    </div>
  );
};

export default PreviewOverlay;
