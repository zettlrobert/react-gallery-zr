import React, { ReactNode } from "react";
import { GalleryProps, GalleryVariant } from "./Gallery.types";
import styles from "./Gallery.module.scss";
import { ReactElement, useState } from "react";
import PreviewOverlay from "../PreviewOverlay";

const Gallery = (props: GalleryProps) => {
  // Destructure Props
  const { variant = GalleryVariant.FULL, children } = props;

  const [content, setContent] = useState("");

  const [showPreview, setShowPreview] = useState(false);
  const [selectedElement, setSelectedElement] = useState<
    ReactElement | undefined
  >();

  /* Gallery Functions */
  const showPreviewHandler = (): void => {
    let show = !showPreview;
    setShowPreview(show);
  };

  return (
    <>
      <div
        className={`
			${styles.Gallery}
			${variant === GalleryVariant.FULL ? styles.Full : styles.Inset}
		`}
      >
        <PreviewOverlay
          show={showPreview}
          onClose={showPreviewHandler}
          children={selectedElement}
        />
        <button onClick={showPreviewHandler}>Show Preview</button>
        <div className={styles.GalleryContainer}>{children}</div>
      </div>
    </>
  );
};

export default Gallery;
