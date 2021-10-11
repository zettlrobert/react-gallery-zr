import React, { ReactNode } from "react";
import { GalleryProps, GalleryVariant } from "./Gallery.types";
import styles from "./Gallery.module.scss";
import { ReactElement, useState } from "react";
import PreviewOverlay from "../PreviewOverlay";
import { createUUID } from "../../utils/uuid";

const Gallery = (props: GalleryProps) => {
  // Destructure Props
  const { variant = GalleryVariant.FULL, children } = props;

  // Generate Array from Children
  const elements = React.Children.toArray(children);

  console.log("elements", elements);

  // Show or Hide the Preview
  const [showPreview, setShowPreview] = useState(false);

  const [selectedElement, setSelectedElement] = useState<
    ReactElement | undefined
  >();

  const [selectedElementIndex, setSelectedElementIndex] = useState<
    number | undefined
  >();

  /* Gallery Functions */
  const showPreviewHandler = (): void => {
    let show = !showPreview;
    setShowPreview(show);
  };

  const onGalleryItemClickHandler = (element: ReactElement, index: number) => {
    const clickedElement = element;
    const indexOfSelectedElement = index;
    setSelectedElement(clickedElement);
    setSelectedElementIndex(indexOfSelectedElement);
    showPreviewHandler();
  };

  const updateIndexAndElement = (element: ReactElement, index: number) => {
    setSelectedElementIndex(index);
    setSelectedElement(element);
  };

  const onCircleThroughHandler = (rotate: number) => {
    const amountOfChildren = React.Children.toArray(children).length;

    if (rotate === 1) {
      let proableNewIndex = selectedElementIndex! + 1;

      // If we exceed the max
      if (proableNewIndex > amountOfChildren - 1) {
        const newIndex = 0;
        let newElement = elements[newIndex] as ReactElement;

        updateIndexAndElement(newElement, newIndex);
        return;
      }

      let newIndex = proableNewIndex;
      let newElement = elements[newIndex] as ReactElement;
      updateIndexAndElement(newElement, newIndex);
    }

    if (rotate === -1) {
      let proableNewIndex = selectedElementIndex! - 1;

      if (proableNewIndex < 0) {
        const newIndex = amountOfChildren - 1;
        const newElement = elements[newIndex] as ReactElement;

        updateIndexAndElement(newElement, newIndex);
        return;
      }

      let newIndex = proableNewIndex;
      let newElement = elements[newIndex] as ReactElement;
      updateIndexAndElement(newElement, newIndex);
    }
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
          onCircleThrough={onCircleThroughHandler}
          children={selectedElement}
        />
        <div className={styles.GalleryContainer}>
          {React.Children.map(
            children,
            (child: React.ReactElement, index: number) => {
              let elementUUID = `child-uuid-${createUUID}`;
              return (
                <div
                  key={elementUUID}
                  onClick={() => onGalleryItemClickHandler(child, index)}
                >
                  {child}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
