import { useEffect } from "react";

export const useClickedOutside = (
  showElement: boolean,
  setShowElement: React.Dispatch<React.SetStateAction<boolean>>,
  ref: React.MutableRefObject<any>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target) && showElement) {
        setShowElement(!showElement);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, showElement]);
};
