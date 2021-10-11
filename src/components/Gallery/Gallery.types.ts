import { ReactElement } from "react";

export enum GalleryVariant {
  INSET = "inset",
  FULL = "full",
}

export interface GalleryProps {
  variant?: GalleryVariant;
  children: ReactElement | ReactElement[];
}
