import { useEffect, useState } from "react";

function throttle(callback, delay) {
  let lastCall = 0;

  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      callback.apply(null, arguments);
      lastCall = now;
    }
  };
}

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [elementHovered, setElementHovered] = useState(null);
  const [dynamicSize, setDynamicSize] = useState(40); // Initial dynamic size
  const [sizeTransitionAnimation, setSizeTransitionAnimation] = useState(false); // Initial dynamic size
  const [navbarHover, setNavbarHover] = useState(false); // Initial dynamic size
  const [borderRadiusShape, setBorderRadiusShape] = useState(50); // Initial dynamic size

  const throttledUpdateCursorPosition = throttle((e) => {
    const x = e.clientX - dynamicSize / 2;
    const y = e.clientY - dynamicSize / 2;

    setPosition({ x, y });
  }, 0);

  const sizeHandleButtonHover = () => {
    setDynamicSize(80);

    setSizeTransitionAnimation(true);
  };

  const sizeHandleButtonLeave = () => {
    setDynamicSize(40);

    setTimeout(() => {
      setSizeTransitionAnimation(false);
    }, 200);
  };

  const navbarHandleButtonHover = () => {
    setNavbarHover(true);
  };

  const navbarHandleButtonLeave = () => {
    setTimeout(() => {
      setNavbarHover(false);
    }, 200);
  };

  useEffect(() => {
    document.addEventListener("mousemove", throttledUpdateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", throttledUpdateCursorPosition);
    };
  }, [throttledUpdateCursorPosition]);

  const getCenterCoordinates = (element) => {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    return { x, y };
  };

  const updateCursorShape = (element, color) => {
    const { offsetWidth, offsetHeight } = element;
    const radius = window.getComputedStyle(element).borderTopLeftRadius;

    // Get the center coordinates
    const { x, y } = getCenterCoordinates(element);

    setPosition({
      x: x,
      y: y,
    });

    setElementHovered({
      x: x,
      y: y,
      width: offsetWidth,
      height: offsetHeight,
      radius: radius,
      color: color,
    });

  };

  return {
    position,
    elementHovered,
    setElementHovered,
    updateCursorShape,
    dynamicSize,
    sizeHandleButtonHover,
    sizeHandleButtonLeave,
    sizeTransitionAnimation,
    navbarHover,
    navbarHandleButtonHover,
    navbarHandleButtonLeave,
    borderRadiusShape,
  };
};

export default useCustomCursor;
