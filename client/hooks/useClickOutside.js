import { useEffect, useState, useRef } from "react";

export default function useClickOutside() {
  const target = useRef();
  const button = useRef();

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isShown &&
        target.current &&
        button.current &&
        !target.current.contains(e.target) &&
        !button.current.contains(e.target)
      ) {
        setIsShown(!isShown);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShown]);

  return { target, button, isShown, setIsShown };
}