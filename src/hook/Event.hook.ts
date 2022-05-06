import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

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

export const useOnScroll = (itemArray: any[], itemsPerPage: number): any[] => {
  const [pageArr, setPageArr] = useState<any[]>([]);

  useEffect(() => {
    setPageArr(itemArray.splice(0, itemsPerPage));
  }, [itemArray]);

  useBottomScrollListener(() =>
    setPageArr((prevState) => [
      ...prevState,
      ...itemArray.splice(0, itemsPerPage),
    ])
  );

  return pageArr;
};
