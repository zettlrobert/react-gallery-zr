import { ReactElement } from "react";

export interface PreviewOverlayProps {
  show: boolean;
  children?: ReactElement;
  onClose: () => void;
}
