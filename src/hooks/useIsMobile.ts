/* useIsMobile hook returns a boolean if the screen width is < 768px(Breakpoint.DESKTOP)
 * It also provides a state value for the current ScreenWidth
 * It uses window.requestAnimationFrame for better performance
 * */
import { useCallback, useEffect, useRef, useState } from "react";

const useIsMobile = (): boolean => {
  const isMounted = useRef<boolean>(true);
  const isSsr = typeof window === "undefined";
  const [width, setWidth] = useState(isSsr ? 0 : window.innerWidth);

  const handleResize = useCallback(() => {
    if (isMounted.current) {
      setWidth(window.innerWidth);
    }
  }, [setWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.requestAnimationFrame(handleResize);
    });
    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // TODO replace with variable as soon as we have set it up
  return width < 769;
};

export default useIsMobile;
